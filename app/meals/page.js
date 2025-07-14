import MealsGrid from "@/assets/components/meals/meals-grid";
import classes from "./page.module.css";
import Link from "next/link";
import getMeals from "@/lib/meals";
import { Suspense } from "react";





async function Meals(){
  const meals=await getMeals()
  return <MealsGrid meals={meals}/>
}


const  MealsPage = () => {
 return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created {''}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your fav recipe and cook it yourself.Its easy & fun!</p>
        <p className={classes.cta}>
          <Link href="/meals/share">
          Share your Fav Recipe..
          </Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={ <p className={classes.loading}>Fetching meals...</p>}>
          <Meals/>
        </Suspense>
        
      </main>
    </>
  );
};

export default MealsPage;
