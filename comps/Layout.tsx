import SideBar from "./SideBar";

type DashboardLayoutProps = {
    children: React.ReactNode;
  };

const Layout = ( { children } :  DashboardLayoutProps  ) => {
    return (
        <div className="flex">
            <div>
              <SideBar />
            </div>
            <div>
                { children }
            </div>
        </div>
    )
}

export default Layout;