export const scrollTo = (id: string,effectBehavior?:ScrollBehavior) => {
    const element = document.getElementById(id) as HTMLDivElement;
    if (element){
        element.scrollIntoView({behavior: effectBehavior || "smooth"});
    }
  };
