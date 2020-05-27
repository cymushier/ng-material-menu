/**
 * Navigation item.
 */
export interface NavigationItem {
    /**
     * `Required`.
     * Could be any string to allow for easy tracking of the menu items.
     */
    id: string;
    /**
     * `Required`.
     * The title to display to the user.
     */
    title: string;
    /**
     * The `URL` to navigate to, could be undefined when
     * it's just used as a dropdown.
     */
    url?: string;
    /**
     * Tooltip text for the menu, if necessary.
     */
    tooltip?: string;
    /**
     * Any material icon to use for this menu.
     */
    matIcon?: string;
    /**
     * An icon, based on css display to be used.
     */
    icon?: string;
    /**
     * An image url to the icon icon.
     */
    iconUrl?: string;
    /**
     * Any `css` classes to attach to the menu item.
     */
    classes?: string;
    /**
     * Whether the menu item is currently hidden or not.
     */
    hidden?: boolean;
    /**
     * Whether to open the link in new tab.
     */
    openInNewTab?: boolean;
    /**
     * Material badge to display atop the navigation time.
     */
    matBadge?: string;
    /**
     * Material color of the badge background.
     */
    matBadgeColor?: string;
    /**
     * The children for this navigation item.
     */
    children?: NavigationItem[];
    /**
     * The callback to be called before rendering the menu. Could ideally be to initiate
     * checks whether this menu should be called or not.
     * @param args The arguments to call this method with.
     */
    renderCallback(...args: any): Promise<boolean>;
}
