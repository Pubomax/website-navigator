/**
 * Focus management utilities for enhanced keyboard accessibility
 */

// Enhanced focus utility to properly manage focus states
export function setFocus(element: HTMLElement | null): void {
  if (!element) return;
  
  // Save current scroll position to prevent scroll jumps
  const scrollPos = {
    x: window.scrollX,
    y: window.scrollY
  };
  
  // Focus the element
  element.focus({
    preventScroll: true
  });
  
  // Restore scroll position
  window.scrollTo(scrollPos.x, scrollPos.y);
}

// Focus trap for modals and popups
export class FocusTrap {
  private element: HTMLElement;
  private focusableElements: HTMLElement[] = [];
  private firstFocusableElement: HTMLElement | null = null;
  private lastFocusableElement: HTMLElement | null = null;
  private previouslyFocusedElement: HTMLElement | null = null;
  private active = false;

  constructor(element: HTMLElement) {
    this.element = element;
    this.updateFocusableElements();
  }

  private updateFocusableElements(): void {
    // Selectors for elements that can receive focus
    const focusableElementsString = 'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';
    
    // Get all focusable elements
    const focusableElements = Array.from(
      this.element.querySelectorAll(focusableElementsString)
    ) as HTMLElement[];
    
    // Filter out elements with display: none
    this.focusableElements = focusableElements.filter(el => {
      const style = window.getComputedStyle(el);
      return style.display !== 'none' && style.visibility !== 'hidden';
    });
    
    // Set first and last focusable elements
    this.firstFocusableElement = this.focusableElements[0] || null;
    this.lastFocusableElement = this.focusableElements[this.focusableElements.length - 1] || null;
  }

  public activate(): void {
    if (this.active) return;
    
    // Store currently focused element to restore later
    this.previouslyFocusedElement = document.activeElement as HTMLElement;
    
    // Update focusable elements in case DOM has changed
    this.updateFocusableElements();
    
    // Focus the first element in the trap
    if (this.firstFocusableElement) {
      setFocus(this.firstFocusableElement);
    }
    
    // Set up keydown event handler
    document.addEventListener('keydown', this.handleKeyDown);
    
    this.active = true;
  }

  public deactivate(): void {
    if (!this.active) return;
    
    // Remove event handler
    document.removeEventListener('keydown', this.handleKeyDown);
    
    // Restore focus to previously focused element
    if (this.previouslyFocusedElement) {
      setFocus(this.previouslyFocusedElement);
    }
    
    this.active = false;
  }

  private handleKeyDown = (event: KeyboardEvent): void => {
    // Only handle Tab key
    if (event.key !== 'Tab') return;
    
    // If there are no focusable elements, do nothing
    if (!this.firstFocusableElement || !this.lastFocusableElement) return;
    
    // Handle cycling focus
    if (event.shiftKey && document.activeElement === this.firstFocusableElement) {
      // Shift+Tab on first element - move to last element
      event.preventDefault();
      setFocus(this.lastFocusableElement);
    } else if (!event.shiftKey && document.activeElement === this.lastFocusableElement) {
      // Tab on last element - move to first element
      event.preventDefault();
      setFocus(this.firstFocusableElement);
    }
  };
}

// Track focus visibility based on input method (keyboard vs mouse)
export function initFocusVisibility(): void {
  let hadKeyboardEvent = false;
  const keyboardModalityWhitelist = ['Tab', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
  
  document.addEventListener('keydown', (event) => {
    if (keyboardModalityWhitelist.includes(event.key)) {
      hadKeyboardEvent = true;
      document.body.classList.add('user-is-tabbing');
    }
  });
  
  // Remove the focus indicator when using mouse
  document.addEventListener('mousedown', () => {
    if (hadKeyboardEvent) {
      hadKeyboardEvent = false;
      document.body.classList.remove('user-is-tabbing');
    }
  });
}

/**
 * ARIA Live Region announcement utility
 * Use this to make screen reader announcements for dynamic content changes
 */
export class Announcer {
  private static instance: Announcer;
  private liveRegion: HTMLElement | null = null;
  private assertiveRegion: HTMLElement | null = null;

  private constructor() {
    this.initialize();
  }

  public static getInstance(): Announcer {
    if (!Announcer.instance) {
      Announcer.instance = new Announcer();
    }
    return Announcer.instance;
  }

  private initialize(): void {
    // Create polite live region (for non-urgent updates)
    this.liveRegion = document.createElement('div');
    this.liveRegion.setAttribute('aria-live', 'polite');
    this.liveRegion.setAttribute('aria-atomic', 'true');
    this.liveRegion.setAttribute('role', 'status');
    this.liveRegion.className = 'sr-only';
    
    // Create assertive live region (for urgent updates)
    this.assertiveRegion = document.createElement('div');
    this.assertiveRegion.setAttribute('aria-live', 'assertive');
    this.assertiveRegion.setAttribute('aria-atomic', 'true');
    this.assertiveRegion.setAttribute('role', 'alert');
    this.assertiveRegion.className = 'sr-only';
    
    // Append to body when DOM is ready
    if (document.body) {
      document.body.appendChild(this.liveRegion);
      document.body.appendChild(this.assertiveRegion);
    } else {
      window.addEventListener('DOMContentLoaded', () => {
        document.body.appendChild(this.liveRegion!);
        document.body.appendChild(this.assertiveRegion!);
      });
    }
  }

  /**
   * Announce a message to screen readers (polite)
   * @param message The message to announce
   */
  public announce(message: string): void {
    if (!this.liveRegion) return;
    
    // Clear previous content
    this.liveRegion.textContent = '';
    
    // Force browser to recognize the content change
    setTimeout(() => {
      this.liveRegion!.textContent = message;
    }, 50);
  }

  /**
   * Announce a message to screen readers with high priority (assertive)
   * @param message The message to announce
   */
  public announceAssertive(message: string): void {
    if (!this.assertiveRegion) return;
    
    // Clear previous content
    this.assertiveRegion.textContent = '';
    
    // Force browser to recognize the content change
    setTimeout(() => {
      this.assertiveRegion!.textContent = message;
    }, 50);
  }
}

/**
 * Page navigation focus manager
 * Restores focus position when navigating between pages in SPAs
 */
export class FocusNavigationManager {
  private static instance: FocusNavigationManager;
  private lastFocusPath: string = '';
  private focusHistoryMap: Map<string, string> = new Map();

  private constructor() {
    this.initialize();
  }

  public static getInstance(): FocusNavigationManager {
    if (!FocusNavigationManager.instance) {
      FocusNavigationManager.instance = new FocusNavigationManager();
    }
    return FocusNavigationManager.instance;
  }

  private initialize(): void {
    // Store IDs of elements when they receive focus
    document.addEventListener('focusin', (e) => {
      const target = e.target as HTMLElement;
      if (target.id) {
        this.focusHistoryMap.set(window.location.pathname, target.id);
      }
    });
  }

  /**
   * Call this method after page navigation to restore focus to the right element
   */
  public restoreFocus(): void {
    const currentPath = window.location.pathname;
    
    // If we're returning to a previous page
    if (this.focusHistoryMap.has(currentPath)) {
      const elementId = this.focusHistoryMap.get(currentPath);
      if (elementId) {
        const element = document.getElementById(elementId);
        if (element) {
          // Wait for page to render before focusing
          setTimeout(() => {
            setFocus(element);
          }, 100);
          return;
        }
      }
    }
    
    // Default: focus the main content
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      setTimeout(() => {
        setFocus(mainContent);
      }, 100);
    }
    
    // Update last focus path
    this.lastFocusPath = currentPath;
  }
}

/**
 * A11y Dialog helper - enhanced version of FocusTrap specifically for dialogs
 */
export class A11yDialog extends FocusTrap {
  private dialog: HTMLElement;
  private closeButtons: HTMLElement[] = [];
  private escapeListener: (e: KeyboardEvent) => void;
  private announcer = Announcer.getInstance();

  constructor(dialogElement: HTMLElement) {
    super(dialogElement);
    this.dialog = dialogElement;
    
    // Find close buttons
    this.closeButtons = Array.from(
      this.dialog.querySelectorAll('[data-dialog-close], [aria-label="Close"]')
    ) as HTMLElement[];
    
    // Setup escape key handler
    this.escapeListener = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        this.close();
      }
    };
  }

  /**
   * Open the dialog with proper ARIA attributes and focus management
   */
  public open(initialFocusSelector?: string): void {
    // Set required ARIA attributes
    this.dialog.setAttribute('aria-modal', 'true');
    this.dialog.setAttribute('role', 'dialog');
    
    // Show the dialog
    this.dialog.classList.remove('hidden');
    this.dialog.removeAttribute('hidden');
    
    // Add event listeners
    document.addEventListener('keydown', this.escapeListener);
    this.closeButtons.forEach(button => {
      button.addEventListener('click', () => this.close());
    });
    
    // Handle background clicks if there's a backdrop
    const backdrop = this.dialog.querySelector('.dialog-backdrop, .modal-backdrop');
    if (backdrop) {
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) {
          this.close();
        }
      });
    }
    
    // Activate focus trap
    super.activate();
    
    // Set initial focus if selector is provided
    if (initialFocusSelector) {
      const initialFocusElement = this.dialog.querySelector(initialFocusSelector) as HTMLElement;
      if (initialFocusElement) {
        setTimeout(() => {
          setFocus(initialFocusElement);
        }, 50);
      }
    }
    
    // Announce dialog for screen readers
    const title = this.dialog.getAttribute('aria-labelledby');
    if (title) {
      const titleElement = document.getElementById(title);
      if (titleElement) {
        this.announcer.announceAssertive(titleElement.textContent || 'Dialog opened');
      }
    } else {
      this.announcer.announceAssertive('Dialog opened');
    }
  }

  /**
   * Close the dialog and restore focus
   */
  public close(): void {
    // Hide the dialog
    this.dialog.classList.add('hidden');
    this.dialog.setAttribute('hidden', 'true');
    
    // Remove event listeners
    document.removeEventListener('keydown', this.escapeListener);
    
    // Deactivate focus trap
    super.deactivate();
    
    // Announce dialog closed for screen readers
    this.announcer.announce('Dialog closed');
  }
}