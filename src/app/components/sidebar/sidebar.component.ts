import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";

declare interface ISideBarMenu {
  path: string;
  title: string;
  class?: string;
  name: string;
  icon: string;
}
export const sideBarMenu: ISideBarMenu[] = [
  {
    path: "overview",
    title: "Overview Panel",
    name: "overview",
    icon: "dashboard"
  },
  {
    path: "debtor",
    title: "Debtors",
    name: "debtor",
    icon: "supervisor_account"
  },
  {
    path: "loan",
    title: "Loan",
    name: "loan",
    icon: "money"
  },
  {
    path: "draft-documents",
    title: "Draft Documents",
    name: "draft-documents",
    icon: "note"
  },
  {
    path: "my-account",
    title: "My Account",
    name: "my-account",
    icon: "account_circle"
  }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {

  @Input()
  public handleMinimize!: Function;

  menuItems: any[] = sideBarMenu;

  selectedNavItem: string = sideBarMenu[0].name;

  constructor(private router: Router) {
    this.router = router;
  };

  ngOnInit(): void {
    const currentPath: string[] = this.router.url.split("/");
    this.selectedNavItem = currentPath[3] ?? sideBarMenu[0].name;
  }

  handleNavItemClick(menu: ISideBarMenu) {
    this.selectedNavItem = menu.name;
  }

  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
