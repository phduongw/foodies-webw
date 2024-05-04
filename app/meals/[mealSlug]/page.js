import classes from "./page.module.css"
import Image from "next/image";
import Link from "next/link";
import {getMeal} from "@/lib/meals";
import {notFound, useParams} from "next/navigation";


export default function MealDetailsPage({ params }) {
    const meal = getMeal(params.mealSlug);
    if (!meal) {
        notFound();
    }

    meal.instructions = meal.instructions.replace(/\n/g, "<br />");

    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image fill src={meal.image}  alt={meal.title}/>
                </div>
                <div className={classes.headerText}>
                    <h1>{meal.title}</h1>
                    <p className={classes.creator}>
                        By <a href={`mailto:${meal.creator_email}`}>{meal.creator_email}</a>
                    </p>
                    <p className={classes.summary}>{meal.summary}</p>
                </div>
            </header>
            <main>
                <p className={classes.instructions} dangerouslySetInnerHTML={{
                    __html: meal.instructions,
                }}></p>
            </main>
        </>
    )
}