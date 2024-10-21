import { GitHubRepo } from "@/types/GithubTypes"
import { GithubLogo, Link } from "@phosphor-icons/react/dist/ssr"
import { ComponentProps } from "react"
import { RiGitRepositoryLine } from "react-icons/ri"

type CardAllProjectsProps = ComponentProps<'div'> & {
    projects?: GitHubRepo
}

export const CardAllProjects = ({projects ,...props}: CardAllProjectsProps) => {
    return (
        <div {...props} className={`${props.className} shadow-md transition-shadow duration-200 hover:shadow-[#ff3131] dark:hover:shadow-gray-dark-200  border p-3 flex flex-col rounded-xl dark:bg-gray-dark-100  h-[162px] dark:border-0 bg-[#f0f6ff47] border-[#f0f6ff47] text-red-light-100 dark:text-gray-dark-300 `}>
        <div className="flex items-center gap-3 mb-3">
            <RiGitRepositoryLine size={20} className="text-blue-dark-300"/> 
            <a target="_blank" href={projects?.html_url} className="font-bold text-lg text-blue-dark-300 dark:text-red-dark-100 hover:underline truncate">{projects?.name}</a>
        </div>
        <p className="text-xs overflow-hidden text-ellipsis min-h-[48px] line-clamp-3 mb-3 text-blue-dark-300">{projects?.description}</p>

            <div className="flex gap-3 mt-auto">
                {projects?.homepage && <a target="_blank" href={projects.homepage} className="text-blue-dark-300 hover:shadow-sm hover:shadow-slate-700 border border-[#374151] dark:border-gray-dark-200 rounded-full p-2"><Link size={20}/></a>}
               {projects?.html_url &&  <a target="_blank" href={projects.html_url} className="text-blue-dark-300 hover:shadow-sm hover:shadow-slate-700 border border-[#374151] dark:border-gray-dark-200 rounded-full p-2"><GithubLogo size={20}/></a>}
                
            </div>
            
        </div>

    )
}