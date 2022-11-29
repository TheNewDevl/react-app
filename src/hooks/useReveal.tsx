import { useCallback, useEffect, useRef } from "react";

const useReveal = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const invisibleElementsRef = useRef<HTMLElement[]>([]);

  /**
   Allows to reset the transition delay by updating classes starting from 0 and according to the number of elements
   * @param {string} tagName HTML tag name
   */
  const updateArticleClasses = (tagName: string) => {
    const articles = invisibleElementsRef.current.filter((el) => el.tagName === tagName);
    articles.forEach((a, i) => {
      a.classList.replace(`${a.classList[a.classList.length - 1]}`, `invisible-${i}`);
    });
  };

  /** Callback function for the IntersectionObserver */
  const intersectionObserverCallBack: IntersectionObserverCallback = useCallback((entries, observer) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        //remove visible element from invisibleElements array to be able to update classes
        invisibleElementsRef.current = invisibleElementsRef.current.filter((el) => el !== entry.target);
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
    updateArticleClasses("ARTICLE");
  }, []);

  /* Update invisible elements array then observe them */
  const initIntersectionObserver = useCallback(() => {
    // If there is an observer, disconnect it
    observerRef.current?.disconnect();
    // Create a new observer and observe all elements with the class invisible
    invisibleElementsRef.current = Array.from(document.querySelectorAll(".invisible"));
    observerRef.current = new IntersectionObserver(intersectionObserverCallBack, { root: null, threshold: 0.1 });
    if (invisibleElementsRef.current.length > 0) {
      invisibleElementsRef.current.forEach((el) => {
        observerRef.current?.observe(el);
      });
    }
  }, [intersectionObserverCallBack]);

  useEffect(() => {
    //init intersection observer
    initIntersectionObserver();

    /**
     * If the DOM changes, we need to re-init the intersection observer
     * Avoids having to place this hook in all components. We can just place it in the App component
     */
    const mutationObserver = new MutationObserver(() => initIntersectionObserver());
    const root = document.querySelector("#root");
    if (root) mutationObserver.observe(root, { childList: true, subtree: true });

    return () => {
      observerRef.current?.disconnect();
      mutationObserver.disconnect();
    };
  }, [initIntersectionObserver]);
};

export default useReveal;
/** Created by carlos on 27/11/2022 */
