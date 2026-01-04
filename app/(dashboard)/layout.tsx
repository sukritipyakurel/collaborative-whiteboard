import { Sidebarr } from "./_components/sidebar";


interface DashboardLayoutProps {
    children : React.ReactNode;
};
const DashboardLayout =({
    children,
}: DashboardLayoutProps
)=>{
    return (
        <main className="h-full">
            <Sidebarr/>
            <div className="pl-[60px] h-full">
                {children}

            </div>

            
        </main>
    )
};

export default DashboardLayout;