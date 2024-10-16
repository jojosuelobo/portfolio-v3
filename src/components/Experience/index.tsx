import { Element } from "react-scroll"
import { TabsNav } from "../Tabs"
import { useTranslations } from "next-intl";

export const Experience = () => {
    const t = useTranslations('Experience');

    return(
        <Element name="experience" className="element">
        <section className="container-personalizado pb-20 pt-32">
            <h1 className="text-3xl mb-6  dark:text-gray-dark-400 font-extrabold text-red-light-400">{t('h1')}</h1>
            <TabsNav data-aos="fade-up" defaultValue="stefanini"/>
        </section>
        </Element>
    )
}