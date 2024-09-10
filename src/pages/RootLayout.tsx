import BreadCrumbb from "../views/BreadCrumb";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div >
      <BreadCrumbb />
      <main>{children}</main>
    </div>
  );
}
