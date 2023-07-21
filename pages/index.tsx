import { PageWrapper } from "@/components/PageWrapper/PageWrapper";
import { getLayout } from "@/components/Layout/BaseLayout/BaseLayout";
import {NextPageWithLayout} from "@/pages/_app";

const Home: NextPageWithLayout = () => {
    return (
        <PageWrapper>
            <p>Hello</p>
        </PageWrapper>
    );
};

Home.getLayout = getLayout;
export default Home;