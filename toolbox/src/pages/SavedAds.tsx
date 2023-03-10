import { Ad } from "../types/types";
import { useEffect, useState } from "react";
import AdFB from "../components/Ad";
import { getSavedAdsFromUser } from "../lib/controller";
import ProfileSidebar from "../components/ProfileBar";
import Title from "../components/Title";
import { useAuth } from "../context/AuthContext";

const SavedAds = () => {

    const [savedAds, setSavedAds] = useState<Ad[]>([]);
    const { currentUser } = useAuth();

    async function getSavedAds() {
        if (currentUser?.id != null) {
            const adsFromDatabase = await getSavedAdsFromUser(currentUser?.id);
            setSavedAds(adsFromDatabase);
        }
    }

    useEffect(() => {
        getSavedAds();
    }, []);

    return (
        <div className='flex w-screen h-auto text-current flex-wrap flex-row gap-20 bg-slate-100'>
            <div className="flex flex-col">
                <ProfileSidebar />
            </div>
            <div className="pt-60 text-left flex flex-col gap-10 pb-10">
                <div>
                    <Title heading="Lagrede " span="annonser" size="text-7xl" />
                </div>
                <section className='flex flex-col h-auto'>
                    <div className='flex m-auto w-full max-w-7xl p-10 text-current flex-wrap flex-row justify-center'>
                        {savedAds?.map((savedAds) => (
                            <AdFB key={savedAds.id} ad={savedAds} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default SavedAds;



