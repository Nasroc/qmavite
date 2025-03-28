import belts from "../belts";
import { FormContent } from "./temps/formContent";

export function Forms4() {
    // Belt data for 12th Kup
    const beltData = belts.find(belt => belt.id === 4);
    if (!beltData) {
        return <div>Belt data not found.</div>;
    }
    const nextBelt = belts.find(belt => belt.id === 3);
    if (!nextBelt) {
        return <div>Next belt data not found.</div>;
    }
    const prevBelt = belts.find(belt => belt.id === 5);
    const nextFormLink = "/resources/info/forms/3";
    const prevFormLink = "/resources/info/forms/5";

    return (
        <FormContent 
            beltData={beltData} 
            nextBelt={nextBelt} 
            prevBelt={prevBelt} 
            nextFormLink={nextFormLink} 
            prevFormLink={prevFormLink} 
        />
    );
}
