import PageSection from "@/components/layouts/PageSection";
import ReviewCard from "@/components/ui/custom/review-card";



export default function EventsReviews(){
    return (
        <PageSection className="bg-background-4">
            <div className="flex flex-col">
                <h2>Real Stories</h2>
                <p>Guests loved every bite!</p>
                <ReviewCard/>
            </div>
        </PageSection>
    )
}