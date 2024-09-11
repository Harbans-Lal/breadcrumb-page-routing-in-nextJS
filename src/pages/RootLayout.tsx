import BreadCrumbb from "../views/BreadCrumb";
import BreadCrumbb1 from "@/views/BreadCrumb1";
type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <BreadCrumbb1 />
      <main>{children}</main>
    </div>
  );
}
