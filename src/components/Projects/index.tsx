import { useEffect, useState } from 'react';
import { Element } from "react-scroll";
import { Card } from "../Card";
import { MdOutlineDoubleArrow } from "react-icons/md";
import {Link} from '@/i18n/routing';
import { GitHubRepo } from "@/types/GithubTypes";
import { SkeletonProjects } from './SkeletonProjects';
import { useTranslations } from 'next-intl';

export const Projects = () => {
    const [projects, setProjects] = useState<GitHubRepo[]>([]);
    const [loading, setLoading] = useState<boolean>(true)
    const t = useTranslations('Projects');


    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('https://api.github.com/users/jojosuelobo/repos');
                if (!response.ok) {
                    throw new Error('Erro ao buscar os dados');
                }
                const data: GitHubRepo[] = await response.json();
                const filtered = data.filter(repo => repo.topics.includes('portfolio')).slice(0, 6);
                setProjects(filtered);
                setLoading(false)
            } catch (error) {
                console.log(error);
                setLoading(true)
       
            }}

        fetchProjects();
    }, []);


    return (
        <Element name="projects" className="element">
            <section className="container-personalizado py-32 flex flex-col">
                <h1 className="text-3xl dark:text-gray-dark-400 font-extrabold mb-6 text-red-light-400">{t("h1")}</h1>
                <div className="grid md:grid-cols-projects gap-y-16 gap-x-8">
                {loading
                ? Array(6).fill(0).map((_, index) => (
                    <SkeletonProjects key={index} />
                ))
                : projects.map(repo => (
                    <Card projetos={repo} data-aos="flip-left" key={repo.id} />
                ))}
                </div>
                <Link href="/projetos" className="transition mt-6 ml-auto py-6 px-8 text-lg sm:text-xl font-bold dark:text-gray-dark-300 dark:hover:text-gray-dark-400 cursor-pointer flex gap-3 items-center hover:text-red-light-200 text-red-light-100">
                    <MdOutlineDoubleArrow className="animate-arrowRight overflow-hidden text-current text-xl lg:text-base" />{t("link")}
                </Link>
            </section>
        </Element>
    );
};

