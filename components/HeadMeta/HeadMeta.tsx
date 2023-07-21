import Head from "next/head";

type PropsType = {
    title?: string;
};

export const HeadMeta = (props: PropsType) => {
    const { title } = props;

    const description = title
        ? `Rick and Morty ${title.toLowerCase()}`
        : "Master class for IT-incubator";

    return (
        <Head>
            <title>{title ?? "NextJS13 App"}</title>
            <meta name="description" content={description} />
            <link rel="icon" href="favicon.ico" />
        </Head>
    );
};