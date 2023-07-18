import {
    Features,
    Footer,
    Gallery,
    Header,
    Homes,
    Layout,
    Realtors,
    Sidebar,
    Story,
    Animation
} from '../layout';

export default function Home() {
    return (
        <Layout>
            <Sidebar />
            <Header />
            <Realtors />
            {/* <Animation /> */}
            <Features />
            <Story />
            <Homes />
            <Gallery />
            <Footer />
        </Layout>
    )
}