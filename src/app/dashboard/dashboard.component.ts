import { Component, OnInit, HostListener, ViewChild, HostBinding } from '@angular/core';
import { NavigationItem } from 'ng-material-menu';
import { MatSidenav } from '@angular/material/sidenav';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  /**
   * An HTML friendly identifier for the currently displayed page.
   * This is computed from the `currentDocument.id` by replacing `/` with `-`
   */
  pageId: string;
  /**
   * An HTML friendly identifer for the "folder" of the currently displayed page.
   * This is computed by taking everything up to the first `/` in the `currentDocument.id`
   */
  folderId: string;
  /**
   * These CSS classes are computed from the current state of the application
   * (e.g. what document is being viewed) to allow for fine grain control over
   * the styling of individual pages.
   * You will get three classes:
   *
   * * `page-...`: computed from the current document id (e.g. events, guide-security, tutorial-toh-pt2)
   * * `folder-...`: computed from the top level folder for an id (e.g. guide, tutorial, etc)
   * * `view-...`: computef from the navigation view (e.g. SideNav, TopBar, etc)
   */
  @HostBinding('class')
  hostClasses = '';

  menus: NavigationItem[];
  isSideBySide = true;
  hasFloatingToc = false;
  private showFloatingToc = new BehaviorSubject(false);
  private showFloatingTocWidth = 800;

  private isSideNavDoc = true;
  private sideBySideWidth = 992;

  @ViewChild(MatSidenav, { static: true })
  sidenav: MatSidenav;

  get isOpened() { return this.isSideBySide && this.isSideNavDoc; }
  get mode() { return this.isSideBySide ? 'side' : 'over'; }

  constructor() { }

  ngOnInit(): void {
    this.menus = [
      { id: 'abcs', title: 'Home' },
      {
        id: 'cs', title: 'Services', children: [
          { id: 'cs.a', title: 'Buying' },
          { id: 'cs.b', title: 'Selling' },
        ]
      },
      {id: 'dss', title: 'Company', matIcon: 'favorite'},
      {id: 'ess', title: 'Settings', matIcon: 'bookmark', children: [
        {id: 'ess.1', title: 'Branch', children: [
          {id: 'ess.1.1', title: 'Locations'},
          {id: 'ess.1.2', title: 'Regions'}
        ]},
        {id: 'ess.2', title: 'Comparisons'}
      ]},
    ];
  }

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width: number) {
    this.isSideBySide = width >= this.sideBySideWidth;
    this.showFloatingToc.next(width > this.showFloatingTocWidth);

    if (this.isSideBySide && !this.isSideNavDoc) {
      // If this is a non-sidenav doc and the screen is wide enough so that we can display menu
      // items in the top-bar, ensure the sidenav is closed.
      // (This condition can only be met when the resize event changes the value of `isSideBySide`
      //  from `false` to `true` while on a non-sidenav doc.)
      this.sidenav.toggle(false);
    }
  }

  updateSideNav() {
    // Preserve current sidenav open state by default.
    const openSideNav = this.sidenav.opened;

    // May be open or closed when wide; always closed when narrow.
    this.sidenav.toggle(this.isSideBySide && openSideNav);
  }

  setPageId(id: string) {
    // Special case the home page
    this.pageId = (id === 'index') ? 'home' : id.replace('/', '-');
  }

  updateHostClasses() {
    const sideNavOpen = `sidenav-${this.sidenav.opened ? 'open' : 'closed'}`;
    const pageClass = `page-${this.pageId}`;
    const folderClass = `folder-${this.folderId}`;

    this.hostClasses = [
      sideNavOpen,
      pageClass,
      folderClass
    ].join(' ');
  }

  updateShell() {
    // Update the SideNav state (if necessary).
    this.updateSideNav();

    // this.setFolderId(this.currentDocument.id);
    this.updateHostClasses();
  }
}
