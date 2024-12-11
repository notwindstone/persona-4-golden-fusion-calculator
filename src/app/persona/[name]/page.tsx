const Page = async ({
    params,
}: {
    params: {
        name: string;
    }
}) => {
    return (
        <div>
            {params.name}
        </div>
    );
}

export default Page;