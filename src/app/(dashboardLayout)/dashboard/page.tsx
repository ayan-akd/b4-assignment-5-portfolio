import { ContentLayout } from "@/components/admin-panel/content-layout";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

export default async function Dashboard() {
    const session = await getServerSession(authOptions);
    return (
        <ContentLayout title="Dashboard">
            <h1>Welcome {session?.user?.name}</h1>
        </ContentLayout>
    );
}