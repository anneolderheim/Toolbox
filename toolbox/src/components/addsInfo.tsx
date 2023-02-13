import { DocumentData, onSnapshot, QuerySnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Adds } from "../types/users";
import { Button } from "@mui/material"
import { addsCollection } from "../lib/controller";
import AddsCard from "./addsCard";

export default function AddsInfo(){
    const [adds, setAdds] = useState<Adds[]>([]);

    useEffect(
        () => 
            onSnapshot(addsCollection, (snapshot: QuerySnapshot<DocumentData>) => {
                setAdds(
                    snapshot.docs.map((doc) => {
                        return {
                            id: doc.id,
                            ...doc.data(),
                        };
                    })
                );
                console.log(adds);
            }),
        []
    );

    return(
        <div className="fakk">
            <div>
                <Button 
                    variant="text" 
                    onClick={() => {
                        adds.map((add => (
                        <AddsCard key={add.id} adds ={add} />
                    )))}}
                    > 
                    log ads 
                </Button>
            </div>
            <div>
                {adds.map((add) => (
                    <AddsCard key={add.id} adds ={add} />
                ))}

            </div>
        </div>
    )
}