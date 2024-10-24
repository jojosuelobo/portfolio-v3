'use client';
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { MagnifyingGlass } from "@phosphor-icons/react";
import {Link} from '@/i18n/routing';
import { FaArrowLeft } from "react-icons/fa";
import { SkeletonAllProjects, SkeletonTotalPages } from "./SkeletonAllProjects";
import { CardAllProjects } from "@/components/CardAllProjects";
import { GitHubRepo } from "@/types/GithubTypes";
import { SmileySad } from "@phosphor-icons/react/dist/ssr";
import { useDebouncedCallback } from 'use-debounce';
import { Pagination } from '@nextui-org/pagination';
import { useTranslations } from 'next-intl';

interface GitHubSearchResponse {
    items: GitHubRepo[];
    total_count: number;
    incomplete_results: boolean;
}

export default function AllProjetos() {
    const [dataRepos, setDataRepos] = useState<GitHubSearchResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [querySearch, setquerySearch] = useState<string>('');
    const t = useTranslations('AllProjects');

    const perPage = 12
    const TotalPages =  Math.ceil(dataRepos?.total_count ? dataRepos?.total_count / perPage : 1 )

    const fetchProjects = async (query: string = '', page: number = 1) => {
        setLoading(true);
        try {
            const user = 'jojosuelobo';
            const encodedQuery = encodeURIComponent(`${query} user:${user}`);
            const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN || '';
            const response = await fetch(`https://api.github.com/search/repositories?q=${encodedQuery}&sort=updated_at&per_page=${perPage}&page=${page}`, {
                headers: {
                    Authorization: `token ${token}`
                }
            });

            if (!response.ok) {
                throw new Error('Erro ao buscar os dados');
            }

            const data: GitHubSearchResponse = await response.json();
       
            setDataRepos(data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };



    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const input = form.querySelector('input[id="search"]') as HTMLInputElement;
        const inputValue = input.value;
        fetchProjects(inputValue);
        setCurrentPage(1)

    }


    const debouncedFetchProjects = useDebouncedCallback((event: ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value;
        fetchProjects(query);
        setquerySearch(query)
        setCurrentPage(1)
    }, 600);

    useEffect(() => {
        fetchProjects(querySearch,currentPage);
    }, [currentPage]);


    return (
        <main className="bg-white text-red-light-100 dark:bg-gray-dark-500 dark:text-gray-dark-300 min-h-screen">
            <section className="py-16 container-personalizado">
                <h1 className="text-center text-3xl mb-8 text-blue-light-400 dark:text-gray-dark-400 font-extrabold">
                    {t("h1")}
                </h1>

                <div className="flex items-center w-full gap-2 sm:gap-5 mb-7">
                    <Link
                        scroll={false}
                        href="/"
                        className="p-4 flex items-center gap-3 text-red-light-200 dark:text-gray-dark-400 opacity-80 hover:opacity-100"
                    >
                        <FaArrowLeft />{t("back")}
                    </Link>

                    <form onSubmit={handleSubmit} className="flex-1 relative">
                        <label htmlFor="search" className="sr-only">{t("search")}</label>
                        <input
                            type="text"
                            placeholder="Digite o nome do projeto"
                            id="search"
                            name="search"
                            onChange={debouncedFetchProjects}
                            className="pl-4 py-2.5 pr-12 w-full rounded-lg focus:outline-none border dark:border-gray-dark-300 dark:focus:border-red-dark-100 transition-all hover:bg-[#f0f6ff38] duration-500 dark:focus:ring-1 dark:focus:ring-offset-red-dark-100 dark:text-gray-dark-400 dark:hover:bg-black/15 border-red-light-100 focus:ring-1 focus:ring-[#009fff4f] text-red-light-400"
                        />
                        <button type="submit" className="absolute top-[50%] -translate-y-[50%] right-[15px] z-[2] cursor-pointer text-red-light-200 dark:text-gray-dark-400">
                            <MagnifyingGlass size={24} />
                        </button>
                    </form>
                </div>
            {loading ? <SkeletonTotalPages />  : (dataRepos && dataRepos.items.length > 0) && <span className="flex justify-end mb-4 text-red-light-400 dark:text-gray-dark-400">
                {t("page1")} {currentPage} {t("page2")} {TotalPages}
                </span>}
                <div className="grid grid-cols-allprojects gap-4">
                    {loading ? (
                        <SkeletonAllProjects />
                    ) : dataRepos && dataRepos.items && dataRepos.items.length > 0 ? (
                        dataRepos.items.map((repo) => (
                            <CardAllProjects key={repo.id} projects={repo} />
                        ))
                    ) : (
                        <div className="flex flex-wrap justify-center items-center gap-3 text-red-light-200 dark:text-gray-dark-300">
                            <p className="text-center text-base sm:text-lg md:text-xl align-baseline">
                                {t("notfound")}
                            </p>
                            <SmileySad size={28} weight="light" />
                        </div>
                    )}
                </div>
                {(dataRepos && dataRepos?.items.length > 0) && (TotalPages > 1) &&
                    <div className='mt-8 flex justify-center'>
                        <Pagination classNames={{
                            cursor: 'bg-red-light-200  dark:bg-red-dark-100 dark:text-gray-dark-500',                            
                        }} showControls size="lg" showShadow page={currentPage} initialPage={1} radius='md' total={TotalPages} onChange={setCurrentPage}       
                        siblings={0} 
                        boundaries={1}    
                        />
                    </div>
                }

            </section>
        </main>
    );
}
