import {currentUser} from "@clerk/nextjs/server";

export default async function Dashboard() {
    const user = await currentUser();

    return (
        <div className="py-12 text-xl">
            Welcome, {user?.firstName}
        </div>
    );
}