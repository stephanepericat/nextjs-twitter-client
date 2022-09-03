import { Layout } from "antd";

// import styles from "../styles/AppLayout.module.scss";

const { Content, Header } = Layout;

export default function AppLayout({ children }) {
  return (
    <Layout>
      <Header>Header</Header>
      <Content>{children}</Content>
    </Layout>
  );
}
