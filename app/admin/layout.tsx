import AdminNav from "../components/admin/AdminNav";

export const metadata = {
  title: "E-Shop Admin",
  description: "E-Shop admin Dashboard",
};

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <div className="">
        <AdminNav />
      </div>
      {children}
    </div>
  );
};

export default AdminLayout;
