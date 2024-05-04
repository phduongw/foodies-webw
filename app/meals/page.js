import Link from "next/link";
import {Suspense} from "react";

import classes from './meals.module.css';
import MealGrid from "@/components/meals/meal-grid";
import {getMeals} from "@/lib/meals";
import MealsLoadingPage from "@/app/meals/loading-out";


async function Meals() {
    const meals = await getMeals();

    return <MealGrid meals={meals}/>;
}

export default function MealsPage() {
    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delicious meals, created{" "}
                    <span className={classes.highlight}>by you</span>
                </h1>
                <p>Choose your favorite recipe and cook it yourself</p>
                <p className={classes.cta}>
                    <Link href="/meals/share">
                        Share your favorite recipe
                    </Link>
                </p>
            </header>
            <main className={classes.main}>
                <Suspense fallback={<MealsLoadingPage />}>
                    <Meals />
                </Suspense>
            </main>
        </>
    )
}