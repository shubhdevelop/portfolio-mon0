import { CardLink, Card, CardHeading, CardContent } from "./Card"
import { ByLine, Paragraph } from "./Paragraph"
import { Separator } from "./Separator"

export type Project = {
    title: string;
    content: string;
    githubUrl: string;
    deployment: string;
    technologyUsed: string[];
    byLine: string;
}

export function ProjectCardList({ projects }: { projects: Project[] }) {
    return (
        <div className="flex flex-col gap-8 p-5">
            {projects.map((project, idx) => <ProjectCard key={idx} project={project} />)}
        </div>
    )
}

export function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="w-full">
            <CardLink to={project.deployment}>
                <Card>
                    <CardHeading>
                        {project.title}
                    </CardHeading>
                    <ByLine>{project.byLine}</ByLine>
                    <Separator />
                    <CardContent>
                        <div className="">
                            <Paragraph>
                                {project.content}
                            </Paragraph>
                        </div>
                    </CardContent>
                    <Separator />
                    <CardContent>
                        <div className="">
                            <Paragraph className="font-mono tracking-wider">
                                {project.technologyUsed.join(' \u2022 ')}
                            </Paragraph>
                        </div>
                    </CardContent>

                </Card>
            </CardLink>
        </div>
    )
}