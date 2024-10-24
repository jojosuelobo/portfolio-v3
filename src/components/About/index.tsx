import { Element } from "react-scroll"
import { Button } from "../Button"
import { DownloadSimple, MapPin } from "@phosphor-icons/react"
import { useTranslations } from "next-intl";


export const About = () => {
    const t = useTranslations('About');

    return (
        <Element name="about" className="element dark:bg-linear-gray">
            <section data-aos="fade-up" className="container-personalizado py-32 ">
                <h1 className="text-3xl dark:text-gray-dark-400 mb-5 font-extrabold text-red-light-400">{t("h1")}</h1>
                <div className="mb-6 flex align-baseline gap-4">
                    <MapPin size={24} weight="fill" className="dark:text-red-dark-100 text-red-light-200" />
                    <h2 className="text-lg font-medium ">Vitória, ES</h2>

                </div>


                <p className="text-base md:text-lg text-justify indent-8">
                {t("p")} <strong>Josué Lobo</strong>, {t("p2")} <strong>{t("p3")}</strong>, {t("p4")} <strong>{t("p5")}</strong> {t("p6")} <strong>{t("p7")} </strong>{t("p8")} <br /><br /> {t("p9")} <a className="hover:underline text-red-light-200 dark:text-red-dark-100" href="mailto:jojosuelobo@gmail.com">jojosuelobo@gmail.com</a> 
                </p>
            

                <a href="/curriculo.pdf" download="JosueLobo(Curriculo).pdf" ><Button iconLeft={DownloadSimple} state="primary" className="mt-12">{t("button")}</Button></a>

            </section>

        </Element>

    )

}