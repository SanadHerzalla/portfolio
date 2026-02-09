import "./index.css";
import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Github,
    Linkedin,
    Mail,
    ExternalLink,
    ArrowRight,
    Code2,
    Server,
    Database,
    Workflow,
    Shield,
    Sparkles,
    MapPin,
    Phone,
    Search,
    Layers,
    Briefcase,
    GraduationCap,
    Globe,
    Star,
} from "lucide-react";


// shadcn/ui
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.07 } },
};

function cn(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}



type Project = {
    name: string;
    type: string;
    description: string;
    tags?: string[];
    links?: { demo?: string; repo?: string };
    bullets?: string[];
};

export default function PortfolioApp() {
    useEffect(() => {
        document.documentElement.classList.add("dark");
    }, []);

    const profile = useMemo(
        () => ({
            name: "Sanad Herzalla",
            headline: "Software Engineer • Full-Stack (React) • CS Fundamentals",
            location: "Amman, Jordan",
            email: "sanad.herzalla@gmail.com",
            phone: "+962 77 994 9913",
            website: "",
            links: {
                github: "https://github.com/SanadHerzalla",
                linkedin: "https://linkedin.com/in/sanadhrz/",
            },
            summary:
                "Final-year Software Engineering student (GPA 3.96) with strong foundations in algorithms, data structures, and OOP. I build full-stack web and desktop apps with a focus on correctness, clean architecture, and user-friendly flows.",
            highlights: [
                {
                    icon: <Code2 className="h-4 w-4 text-cyan-200" />,
                    title: "Frontend",
                    text: "React.js (Hooks, component design), Tailwind CSS, responsive UI",
                },
                {
                    icon: <Server className="h-4 w-4 text-violet-200" />,
                    title: "Backend",
                    text: "PHP, server-side validation, database-backed features",
                },
                {
                    icon: <Database className="h-4 w-4 text-sky-200" />,
                    title: "Databases",
                    text: "MySQL, MS SQL Server, modeling & normalization, advanced SQL",
                },
                {
                    icon: <Shield className="h-4 w-4 text-fuchsia-200" />,
                    title: "CS Fundamentals",
                    text: "DSA, time/space complexity, OOP design, OS fundamentals",
                },
            ],
            skills: {
                primary: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5", "CSS3", "Java", "C#", "SQL"],
                secondary: [
                    "PHP",
                    "MySQL",
                    "MS SQL Server",
                    "Relational Modeling",
                    "Normalization",
                    "Advanced SQL Queries",
                    "OOP Design",
                    "Time & Space Complexity",
                ],
                tools: ["Git", "GitHub", "Linux (fundamentals)", "Competitive Programming"],
            },
            experience: [
                {
                    role: "Software Engineering Student",
                    company: "Academic & Personal Projects",
                    period: "2023 — Present",
                    location: "Amman, Jordan",
                    bullets: [
                        "Built multiple full-stack and desktop applications with an emphasis on correctness, validation, and clean separation of concerns.",
                        "Practiced algorithms & data structures through competitive programming and university competitions.",
                    ],
                    stack: ["React", "JavaScript", "PHP", "MySQL", "MS SQL Server", "C#"],
                },
            ],
            projects: [
                {
                    name: "Project Management System",
                    type: "Frontend (React)",
                    description:
                        "Project/task management app built to practice scalable, maintainable UI and solve a real organizational need.",
                    tags: ["React", "Hooks", "Component Architecture"],
                    links: { demo: "", repo: "" },
                    bullets: [
                        "Used component-based architecture for reusability and scalability.",
                        "Managed state with React Hooks for predictable UI updates.",
                        "Implemented task lifecycle logic with validation and clear user flow.",
                        "Kept separation of concerns to simplify enhancements and maintenance.",
                    ],
                },
                {
                    name: "X/O (Tic-Tac-Toe) Game",
                    type: "Frontend (React)",
                    description:
                        "Tic-Tac-Toe game built from scratch with clean UI/business-logic separation and responsive styling.",
                    tags: ["React", "useState", "useEffect", "Tailwind CSS"],
                    links: { demo: "", repo: "" },
                    bullets: [
                        "Implemented turn management, win/draw detection, and reset handling.",
                        "Styled with Tailwind CSS with responsive, user-friendly interactions.",
                    ],
                },
                {
                    name: "Pharmacy Management System",
                    type: "System Analysis & Database Design",
                    description:
                        "Requirements analysis and full relational database design for a pharmacy system, implemented in MS SQL Server.",
                    tags: ["MS SQL Server", "Modeling", "Normalization"],
                    links: { demo: "", repo: "" },
                    bullets: [
                        "Translated business requirements into technical models (use cases, classes, schema).",
                        "Designed entities, constraints, and relationships with real-world constraints in mind.",
                    ],
                },
                {
                    name: "Aircraft Game",
                    type: "Desktop (C# / Windows Forms)",
                    description:
                        "2D aircraft game featuring real-time movement, collision detection, scoring, and state transitions.",
                    tags: ["C#", "Windows Forms", "Event-driven"],
                    links: { demo: "", repo: "" },
                    bullets: [
                        "Built real-time mechanics using timers and event-driven updates.",
                        "Implemented start/play/pause/game-over state transitions with responsive gameplay.",
                    ],
                },
                {
                    name: "Full-Stack Donation Website",
                    type: "Full-Stack Web",
                    description:
                        "Donation platform with server-side validation and database-backed donation tracking.",
                    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
                    links: { demo: "", repo: "" },
                    bullets: [
                        "Implemented server-side validation and donation tracking in MySQL.",
                        "Prioritized a simple, intuitive flow to reduce friction during donations.",
                    ],
                },
            ],
            education: [
                {
                    school: "Amman Arab University",
                    degree: "B.Sc. in Software Engineering (GPA 3.96)",
                    period: "Oct 2023 — Present",
                    notes: [
                        "Strong academic record; recommended by multiple professors for technical proficiency.",
                        "Focus areas: algorithms, data structures, OOP design, database design.",
                    ],
                },
            ],
            awards: [
                { title: "EpiCode (IEEE Hashemite University)", year: "2025", detail: "Participated; demonstrated strong problem-solving and algorithmic thinking." },
                { title: "Codescape Programming Competition", year: "2025", detail: "1st place in Stage 2 (SQL Queries); 10th overall." },
                { title: "UI/UX Design Competition, Amman Arab University", year: "2025", detail: "4th place — E-Banking UI/UX focused on usability and accessibility." },
                { title: "AAU-PC (Amman Arab University)", year: "2024", detail: "4th place — algorithmic problem solving and team collaboration." },
            ],
            certifications: [],
            languages: [
                { name: "Arabic", level: "Native / Bilingual" },
                { name: "English", level: "Professional Working Proficiency" },
            ],
            resumeUrl: "",
        }),
        []
    );

    const [activeSection, setActiveSection] = useState("home");
    const [projects] = useState<Project[]>(profile.projects);
    const [projectQuery, setProjectQuery] = useState("");

    const filteredProjects = useMemo(() => {
        const q = projectQuery.trim().toLowerCase();
        if (!q) return projects;
        return projects.filter((p: Project) => {
            const hay = [p.name, p.type, p.description, ...(p.tags || [])].join(" ").toLowerCase();
            return hay.includes(q);
        });
    }, [projects, projectQuery]);

    const sections = useMemo(
        () => [
            { id: "home", label: "Home" },
            { id: "about", label: "About" },
            { id: "skills", label: "Skills" },
            { id: "projects", label: "Projects" },
            { id: "experience", label: "Experience" },
            { id: "education", label: "Education" },
            { id: "contact", label: "Contact" },
        ],
        []
    );

    const scrollTo = (id: string) => {
        setActiveSection(id);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div className="relative min-h-screen text-foreground">
            <BackgroundDecor />
            {/* Top bar */}
            <header className="sticky top-0 z-50 border-b border-white/5 bg-background/60 backdrop-blur">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
                    <button
                        onClick={() => scrollTo("home")}
                        className="group flex items-center gap-2 rounded-xl px-2 py-1 transition hover:bg-white/5"
                        aria-label="Go to top"
                    >
                        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-card dark:bg-card/60 dark:bg-white/5 ring-1 ring-white/10">
                            <Sparkles className="h-4 w-4 text-cyan-200" />
                        </div>
                        <div className="text-left">
                            <div className="text-sm font-semibold leading-none">{profile.name}</div>
                            <div className="text-xs text-muted-foreground">{profile.headline}</div>
                        </div>
                    </button>

                    <nav className="hidden items-center gap-1 md:flex">
                        {sections.map((s) => (
                            <Button
                                key={s.id}
                                variant={activeSection === s.id ? "secondary" : "ghost"}
                                size="sm"
                                onClick={() => scrollTo(s.id)}
                                className="rounded-xl border-2 border-transparent hover:border-white/10 hover:scale-105 transition-all duration-200"
                            >
                                {s.label}
                            </Button>
                        ))}
                    </nav>

                    <div className="flex items-center gap-2">
                        <IconLink href={profile.links.github} label="GitHub">
                            <Github className="h-4 w-4" />
                        </IconLink>
                        <IconLink href={profile.links.linkedin} label="LinkedIn">
                            <Linkedin className="h-4 w-4" />
                        </IconLink>

                    </div>

                </div>
            </header >

            < div className="border-b border-white/5 bg-background/50 backdrop-blur md:hidden" >
                <div className="mx-auto max-w-6xl px-4 py-2">
                    <div className="flex flex-wrap gap-2">
                        {sections.map((s) => (
                            <Button
                                key={s.id}
                                variant={activeSection === s.id ? "secondary" : "ghost"}
                                size="sm"
                                onClick={() => scrollTo(s.id)}
                                className="rounded-xl border-2 border-transparent hover:border-white/10 hover:scale-105 transition-all duration-200"
                            >
                                {s.label}
                            </Button>
                        ))}
                    </div>
                </div>
            </div >

            <main className="mx-auto max-w-6xl px-4">
                <section id="home" className="scroll-mt-24 py-16 md:py-20">
                    <motion.div variants={stagger} initial="hidden" animate="show" className="grid gap-6 md:grid-cols-12">
                        <motion.div variants={fadeUp} className="md:col-span-7">
                            <Card className="overflow-hidden rounded-3xl border-0 bg-card/60 shadow-xl shadow-black/20 ring-1 ring-white/10">
                                <CardHeader className="space-y-3">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <Badge className="rounded-full bg-white/10 text-foreground ring-1 ring-white/10">
                                            <Star className="mr-1 h-3.5 w-3.5 text-cyan-200" />
                                            Open to opportunities
                                        </Badge>

                                        <Badge variant="secondary" className="rounded-full bg-cyan-500/10 text-cyan-100 ring-1 ring-cyan-400/20">
                                            <MapPin className="mr-1 h-3.5 w-3.5" /> {profile.location}
                                        </Badge>

                                        <Badge variant="secondary" className="rounded-full bg-violet-500/10 text-violet-100 ring-1 ring-violet-400/20">
                                            <Globe className="mr-1 h-3.5 w-3.5" /> Remote / On-site
                                        </Badge>
                                    </div>

                                    <CardTitle className="text-3xl leading-tight md:text-4xl">
                                        {profile.headline}{" "}
                                        <span className="bg-linear-to-r from-cyan-300 via-sky-300 to-violet-300 bg-clip-text text-transparent">
                                            building modern products
                                        </span>
                                    </CardTitle>

                                    <CardDescription className="text-base">{profile.summary}</CardDescription>

                                    {/* Social icons */}
                                    <div className="flex items-center gap-4 pt-2">
                                        <a
                                            href={profile.links.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="group flex h-10 w-10 items-center justify-center rounded-xl bg-card dark:bg-card/60 dark:bg-white/5 ring-1 ring-white/10 transition-all hover:bg-white/10 hover:ring-white/20"
                                            aria-label="GitHub"
                                        >
                                            <Github className="h-5 w-5 text-foreground transition-transform group-hover:scale-110" />
                                        </a>
                                        <a
                                            href={profile.links.linkedin}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="group flex h-10 w-10 items-center justify-center rounded-xl bg-card dark:bg-card/60 dark:bg-white/5 ring-1 ring-white/10 transition-all hover:bg-white/10 hover:ring-white/20"
                                            aria-label="LinkedIn"
                                        >
                                            <Linkedin className="h-5 w-5 text-foreground transition-transform group-hover:scale-110" />
                                        </a>
                                        <a
                                            href={`mailto:${profile.email}`}
                                            className="group flex h-10 w-10 items-center justify-center rounded-xl bg-card dark:bg-card/60 dark:bg-white/5 ring-1 ring-white/10 transition-all hover:bg-white/10 hover:ring-white/20"
                                            aria-label="Email"
                                        >
                                            <Mail className="h-5 w-5 text-foreground transition-transform group-hover:scale-110" />
                                        </a>
                                    </div>
                                </CardHeader>

                                <CardContent className="space-y-5">
                                    <TechIcons technologies={["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Java", "C#", "SQL"]} />

                                    <div className="flex flex-wrap items-center gap-2">
                                        <Button
                                            className={cn(
                                                "rounded-xl text-white border-2 border-transparent",
                                                "bg-linear-to-r from-cyan-500 via-sky-500 to-violet-500",
                                                "hover:brightness-110 hover:saturate-125 hover:border-white/20 hover:scale-105",
                                                "transition-all duration-200 shadow-lg hover:shadow-xl"
                                            )}
                                            onClick={() => scrollTo("projects")}
                                        >
                                            View Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </Button>


                                        {profile.resumeUrl ? (
                                            <Button asChild variant="outline" className="rounded-xl border-2 border-white/10 bg-transparent hover:bg-white/5 hover:border-white/20 hover:scale-105 transition-all duration-200">
                                                <a href={profile.resumeUrl} target="_blank" rel="noreferrer">
                                                    Download Resume <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                                </a>
                                            </Button>
                                        ) : null}
                                    </div>

                                    <Separator className="bg-white/10" />

                                    <div className="grid gap-3 md:grid-cols-2">
                                        {profile.highlights.map((h) => (
                                            <div
                                                key={h.title}
                                                className="flex items-start gap-3 rounded-2xl bg-card dark:bg-card/60 dark:bg-white/5 p-3 ring-1 ring-white/10"
                                            >
                                                <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-2xl bg-card dark:bg-card/60 dark:bg-white/5 ring-1 ring-white/10">
                                                    {h.icon}
                                                </div>
                                                <div>
                                                    <div className="text-sm font-semibold">{h.title}</div>
                                                    <div className="text-sm text-muted-foreground">{h.text}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div variants={fadeUp} className="md:col-span-5">
                            <div className="grid gap-4">
                                <Card className="rounded-3xl border-0 bg-card/60 shadow-xl shadow-black/20 ring-1 ring-white/10">
                                    <CardHeader>
                                        <CardTitle className="text-lg">Signature strengths</CardTitle>
                                    </CardHeader>
                                    <CardContent className="grid gap-2">
                                        <Strength icon={<Shield className="h-4 w-4 text-cyan-200" />} text="Reliable APIs: validation, auth, idempotency" />
                                        <Strength icon={<Layers className="h-4 w-4 text-violet-200" />} text="Frontend architecture: reusable components + hooks" />
                                        <Strength icon={<Workflow className="h-4 w-4 text-sky-200" />} text="Workflows: retries, timeouts, durable execution" />
                                    </CardContent>
                                </Card>
                            </div>
                        </motion.div>

                    </motion.div>
                </section>

                {/* ABOUT */}
                <section id="about" className="scroll-mt-24 py-8">
                    <SectionTitle title="About" subtitle="" />
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-80px" }}
                        className="grid gap-6 md:grid-cols-12"
                    >
                        <motion.div variants={fadeUp} className="md:col-span-7">
                            <Card className="rounded-3xl border-0 bg-card/60 shadow-xl shadow-black/20 ring-1 ring-white/10">
                                <CardHeader>
                                    <CardTitle className="text-lg">My approach</CardTitle>
                                    <CardDescription></CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4 text-sm text-muted-foreground">
                                    <p>
                                        I like building products with a strong foundation: clear requirements, simple flows, and a focus on reliability.
                                        On the frontend, I prioritize predictable state, reusable components, and performance. On the backend, I focus on clean
                                        boundaries, API correctness, and observability.
                                    </p>
                                    <p>
                                        I’m especially interested in designing systems that handle retries, failures,
                                        and long-running processes safely.
                                    </p>

                                    <div className="grid gap-3 md:grid-cols-2">
                                        <MiniPillar
                                            title="Engineering"
                                            icon={<Code2 className="h-4 w-4 text-cyan-200" />}
                                            bullets={["Readable code, strong naming", "Testing where it matters", "Performance & DX"]}
                                        />
                                        <MiniPillar
                                            title="Systems"
                                            icon={<Server className="h-4 w-4 text-violet-200" />}
                                            bullets={["Resiliency patterns", "Idempotency & retries", "Metrics/logging/tracing"]}
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div variants={fadeUp} className="md:col-span-5">
                            <Card className="rounded-3xl border-0 bg-card/60 shadow-xl shadow-black/20 ring-1 ring-white/10">
                                <CardHeader>
                                    <CardTitle className="text-lg">What I’m looking for</CardTitle>
                                    <CardDescription></CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    {[
                                        { icon: <Briefcase className="h-4 w-4 text-cyan-200" />, text: "Full-stack / backend-leaning roles" },
                                        { icon: <Workflow className="h-4 w-4 text-violet-200" />, text: "Scalable APIs" },
                                        { icon: <Sparkles className="h-4 w-4 text-sky-200" />, text: "Teams that value quality" },
                                    ].map((row) => (
                                        <div key={row.text} className="flex items-start gap-3 rounded-2xl bg-card dark:bg-card/60 dark:bg-white/5 p-3 ring-1 ring-white/10">
                                            <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-2xl bg-card dark:bg-card/60 dark:bg-white/5 ring-1 ring-white/10">
                                                {row.icon}
                                            </div>
                                            <div className="text-sm text-muted-foreground">{row.text}</div>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </motion.div>
                    </motion.div>
                </section>

                {/* SKILLS */}
                <section id="skills" className="scroll-mt-24 py-8">
                    <SectionTitle title="Skills" subtitle="Grouped for fast scanning." />
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
                        <Card className="rounded-3xl border-0 bg-card/60 shadow-xl shadow-black/20 ring-1 ring-white/10">
                            <CardContent className="pt-6">
                                {/* Technology icons above skills tabs */}
                                <Tabs defaultValue="primary" className="w-full">
                                    <TabsList
                                        className="
      grid w-full grid-cols-3
      rounded-2xl
      bg-white/5 ring-1 ring-white/10
      p-1
      h-11
      items-stretch
    "
                                    >
                                        <TabsTrigger
                                            value="primary"
                                            className="
        h-full w-full
        rounded-xl
        p-0
        leading-none
        flex items-center justify-center
        text-sm font-medium
        transition-colors
        hover:bg-white/10
        data-[state=active]:bg-white/15
        data-[state=active]:shadow-none
        focus-visible:ring-0 focus-visible:ring-offset-0
      "
                                        >
                                            Core
                                        </TabsTrigger>

                                        <TabsTrigger
                                            value="secondary"
                                            className="
        h-full w-full
        rounded-xl
        p-0
        leading-none
        flex items-center justify-center
        text-sm font-medium
        transition-colors
        hover:bg-white/10
        data-[state=active]:bg-white/15
        data-[state=active]:shadow-none
        focus-visible:ring-0 focus-visible:ring-offset-0
      "
                                        >
                                            Also
                                        </TabsTrigger>

                                        <TabsTrigger
                                            value="tools"
                                            className="
                                    h-full w-full
                                    rounded-xl
                                    p-0
                                    leading-none
                                    flex items-center justify-center
                                    text-sm font-medium
                                    transition-colors
                                    hover:bg-white/10
                                    data-[state=active]:bg-white/15
                                    data-[state=active]:shadow-none
                                    focus-visible:ring-0 focus-visible:ring-offset-0
      "
                                        >
                                            Tools
                                        </TabsTrigger>
                                    </TabsList>

                                    <TabsContent value="primary" className="mt-4">
                                        <SkillCloud items={profile.skills.primary} />
                                    </TabsContent>

                                    <TabsContent value="secondary" className="mt-4">
                                        <SkillCloud items={profile.skills.secondary} />
                                    </TabsContent>

                                    <TabsContent value="tools" className="mt-4">
                                        <SkillCloud items={profile.skills.tools} />
                                    </TabsContent>
                                </Tabs>


                            </CardContent>
                        </Card>
                    </motion.div>
                </section>

                {/* PROJECTS */}
                <section id="projects" className="scroll-mt-24 py-8">
                    <SectionTitle title="Projects" subtitle="" />
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-80px" }}
                        className="flex flex-col gap-4"
                    >
                        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-start">
                            <div className="relative w-full md:w-80">
                                <Search className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    value={projectQuery}
                                    onChange={(e) => setProjectQuery(e.target.value)}
                                    placeholder="Search projects…"
                                    className="rounded-2xl border-white/10 bg-card pl-9 ring-1 ring-white/10 focus-visible:ring-2 focus-visible:ring-cyan-400/40"
                                />
                            </div>
                        </div>


                        <div className="grid gap-4 md:grid-cols-2">
                            <AnimatePresence>
                                {filteredProjects.map((p) => (
                                    <motion.div
                                        key={p.name}
                                        layout
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.25 }}
                                    >
                                        <ProjectCard project={p} />
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>

                        {filteredProjects.length === 0 ? (
                            <div className="rounded-3xl bg-card dark:bg-card/60 dark:bg-white/5 p-8 text-center text-sm text-muted-foreground ring-1 ring-white/10">
                                No projects match “{projectQuery}”. Try a different keyword.
                            </div>
                        ) : null}
                    </motion.div>
                </section>

                {/* EXPERIENCE */}
                <section id="experience" className="scroll-mt-24 py-8">
                    <SectionTitle title="Experience" subtitle="" />
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-80px" }}
                        className="grid gap-4"
                    >
                        {profile.experience.map((job, idx) => (
                            <motion.div key={idx} variants={fadeUp}>
                                <Card className="rounded-3xl border-0 bg-card/60 shadow-xl shadow-black/20 ring-1 ring-white/10">
                                    <CardHeader>
                                        <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                                            <div>
                                                <CardTitle className="text-lg">{job.role}</CardTitle>
                                                <CardDescription>
                                                    {job.company} • {job.location}
                                                </CardDescription>
                                            </div>
                                            <Badge className="w-fit rounded-full bg-white/10 text-foreground ring-1 ring-white/10">{job.period}</Badge>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                                            {job.bullets.map((b, i) => (
                                                <li key={i}>{b}</li>
                                            ))}
                                        </ul>
                                        <div className="flex flex-wrap gap-2">
                                            {(job.stack || []).map((t) => (
                                                <Badge key={t} className="rounded-full bg-white/10 text-foreground ring-1 ring-white/10">
                                                    {t}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                {/* EDUCATION */}
                <section id="education" className="scroll-mt-24 py-8">
                    <SectionTitle title="Education" subtitle="" />
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-80px" }}
                        className="grid gap-4 md:grid-cols-2"
                    >
                        {profile.education.map((ed, idx) => (
                            <motion.div key={idx} variants={fadeUp}>
                                <Card className="rounded-3xl border-0 bg-card/60 shadow-xl shadow-black/20 ring-1 ring-white/10">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2 text-lg">
                                            <GraduationCap className="h-5 w-5 text-cyan-200" />
                                            {ed.school}
                                        </CardTitle>
                                        <CardDescription>
                                            {ed.degree} • {ed.period}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                                            {(ed.notes || []).map((n, i) => (
                                                <li key={i}>{n}</li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}

                        <motion.div variants={fadeUp}>
                            <Card className="rounded-3xl border-0 bg-card/60 shadow-xl shadow-black/20 ring-1 ring-white/10">
                                <CardHeader>
                                    <CardTitle className="text-lg">Certifications</CardTitle>
                                    <CardDescription></CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    {profile.certifications?.length ? (
                                        profile.certifications.map((c: any, i: number) => (
                                            <div key={i} className="flex items-center justify-between rounded-2xl bg-card dark:bg-card/60 dark:bg-white/5 p-3 ring-1 ring-white/10">
                                                <div>
                                                    <div className="text-sm font-semibold">{c.title}</div>
                                                    <div className="text-xs text-muted-foreground">{c.issuer}</div>
                                                </div>
                                                <Badge className="rounded-full bg-white/10 text-foreground ring-1 ring-white/10">{c.year}</Badge>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="text-sm text-muted-foreground">No certifications listed.</div>
                                    )}

                                    <Separator className="my-4 bg-white/10" />

                                    <div className="space-y-2">
                                        <div className="text-sm font-semibold">Awards & Competitions</div>
                                        <div className="space-y-2">
                                            {(profile.awards || []).map((a, i) => (
                                                <div key={i} className="rounded-2xl bg-card dark:bg-card/60 dark:bg-white/5 p-3 ring-1 ring-white/10">
                                                    <div className="flex flex-wrap items-center justify-between gap-2">
                                                        <div className="text-sm font-semibold">{a.title}</div>
                                                        {a.year ? (
                                                            <Badge className="rounded-full bg-white/10 text-foreground ring-1 ring-white/10">{a.year}</Badge>
                                                        ) : null}
                                                    </div>
                                                    <div className="mt-1 text-sm text-muted-foreground">{a.detail}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <Separator className="my-4 bg-white/10" />

                                    <div className="space-y-2">
                                        <div className="text-sm font-semibold">Languages</div>
                                        <div className="flex flex-wrap gap-2">
                                            {(profile.languages || []).map((l) => (
                                                <Badge key={l.name} className="rounded-full bg-white/10 text-foreground ring-1 ring-white/10">
                                                    {l.name} — {l.level}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </motion.div>
                </section>

                {/* CONTACT - Anchor for navigation */}
                <section id="contact" className="scroll-mt-24 py-12">
                    <SectionTitle title="Contact" subtitle="Let’s connect." />

                    <div className="max-w-3xl">
                        <Card className="rounded-3xl border-0 bg-card/60 shadow-xl shadow-black/20 ring-1 ring-white/10">
                            <CardHeader>
                                <CardTitle className="text-lg">Let's connect</CardTitle>
                                <CardDescription>Get in touch with me</CardDescription>
                            </CardHeader>

                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <InfoRow icon={<Mail className="h-4 w-4" />} label="Email" value={profile.email} />
                                    <InfoRow icon={<Phone className="h-4 w-4" />} label="Phone" value={profile.phone} />
                                    <InfoRow icon={<MapPin className="h-4 w-4" />} label="Location" value={profile.location} />
                                </div>

                                <Separator className="bg-white/10" />

                                <div className="flex flex-col gap-2">
                                    <Button
                                        asChild
                                        className="w-full rounded-xl border-2 border-transparent bg-linear-to-r from-cyan-500 via-sky-500 to-violet-500 text-white hover:brightness-110 hover:border-white/20 hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
                                    >
                                        <a href={`mailto:${profile.email}`}>
                                            <Mail className="mr-2 h-4 w-4" /> Email me
                                        </a>
                                    </Button>

                                    <Button
                                        asChild
                                        variant="secondary"
                                        className="w-full rounded-xl border-2 border-white/10 bg-white/10 text-foreground hover:bg-white/15 hover:border-white/20 hover:scale-[1.02] transition-all duration-200"
                                    >
                                        <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
                                            <Linkedin className="mr-2 h-4 w-4" /> Message on LinkedIn
                                        </a>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>



                <footer className="py-10">
                    <div className="flex flex-col items-center justify-between gap-3 rounded-3xl bg-card dark:bg-card/60 dark:bg-white/5 p-6 ring-1 ring-white/10 md:flex-row">
                        <div className="text-sm text-muted-foreground">© {new Date().getFullYear()} {profile.name}. Built with React.</div>
                        <div className="flex items-center gap-2">
                            <Button variant="ghost" className="rounded-xl border-2 border-transparent hover:border-white/10 hover:bg-white/5 hover:scale-105 transition-all duration-200" onClick={() => scrollTo("home")}>
                                Top
                            </Button>
                            <Button asChild variant="outline" className="rounded-xl border-2 border-white/10 bg-transparent hover:bg-white/5 hover:border-white/20 hover:scale-105 transition-all duration-200">
                                <a href={profile.links.github} target="_blank" rel="noreferrer">
                                    <Github className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" /> GitHub
                                </a>
                            </Button>
                            <Button asChild variant="outline" className="rounded-xl border-2 border-white/10 bg-transparent hover:bg-white/5 hover:border-white/20 hover:scale-105 transition-all duration-200">
                                <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
                                    <Linkedin className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" /> LinkedIn
                                </a>
                            </Button>
                        </div>
                    </div>
                </footer>
            </main>
        </div >
    );
}

function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
    return (
        <div className="mb-6">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
        </div>
    );
}

function IconLink({ href, label, children }: { href?: string; label: string; children: React.ReactNode }) {
    const safe = href && href.startsWith("http");
    return (
        <Button variant="ghost" size="icon" className="rounded-xl border-2 border-transparent hover:border-white/10 hover:bg-white/5 hover:scale-110 transition-all duration-200" asChild aria-label={label} title={label}>
            <a
                href={safe ? href : "#"}
                target={safe ? "_blank" : undefined}
                rel={safe ? "noreferrer" : undefined}
                onClick={(e) => {
                    if (!safe) e.preventDefault();
                }}
            >
                {children}
            </a>
        </Button>
    );
}

function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
    return (
        <div className="flex items-start justify-between gap-3 rounded-2xl bg-card dark:bg-card/60 dark:bg-white/5 p-3 ring-1 ring-white/10">
            <div className="flex items-center gap-2 text-sm">
                <span className="flex h-8 w-8 items-center justify-center rounded-2xl bg-card dark:bg-card/60 dark:bg-white/5 ring-1 ring-white/10">
                    {icon}
                </span>
                <span className="font-medium">{label}</span>
            </div>
            <div className="max-w-[60%] truncate text-right text-sm text-muted-foreground" title={value}>
                {value}
            </div>
        </div>
    );
}

function Strength({ icon, text }: { icon: React.ReactNode; text: string }) {
    return (
        <div className="flex items-start gap-3 rounded-2xl bg-card dark:bg-card/60 dark:bg-white/5 p-3 ring-1 ring-white/10">
            <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-2xl bg-card dark:bg-card/60 dark:bg-white/5 ring-1 ring-white/10">
                {icon}
            </div>
            <div className="text-sm text-muted-foreground">{text}</div>
        </div>
    );
}

function MiniPillar({ title, icon, bullets }: { title: string; icon: React.ReactNode; bullets: string[] }) {
    return (
        <div className="rounded-2xl bg-card dark:bg-card/60 dark:bg-white/5 p-4 ring-1 ring-white/10">
            <div className="mb-2 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-card dark:bg-card/60 dark:bg-white/5 ring-1 ring-white/10">{icon}</div>
                <div className="text-sm font-semibold">{title}</div>
            </div>
            <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                {bullets.map((b: string) => (
                    <li key={b}>{b}</li>
                ))}
            </ul>
        </div>
    );
}

const skillLogo: Record<string, string> = {
    "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "JavaScript (ES6+)": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    "HTML5": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    "CSS3": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    "C#": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    "SQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    "PHP": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    "MS SQL Server": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
    "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    "GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    "Linux (fundamentals)": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
};

// Technology icons component for display above buttons
function TechIcons({ technologies }: { technologies: string[] }) {
    return (
        <div className="flex flex-wrap items-center gap-3 mb-4">
            {technologies.map((tech) => {
                const logo = skillLogo[tech];
                return (
                    <div
                        key={tech}
                        className="group flex items-center gap-2 rounded-lg bg-card dark:bg-card/60 dark:bg-white/5 px-3 py-2 ring-1 ring-white/10 transition-all hover:bg-white/10 hover:ring-white/20 hover:scale-105"
                        title={tech}
                    >
                        {logo ? (
                            <img
                                src={logo}
                                alt={`${tech} logo`}
                                className="h-5 w-5 transition-transform group-hover:scale-110"
                                loading="lazy"
                            />
                        ) : (
                            <Code2 className="h-5 w-5 text-muted-foreground" />
                        )}
                        <span className="text-xs font-medium text-foreground/80 group-hover:text-foreground">{tech}</span>
                    </div>
                );
            })}
        </div>
    );
}

function SkillCloud({ items }: { items: string[] }) {
    return (
        <div className="flex flex-wrap gap-2">
            {items.map((s: string) => {
                const logo = skillLogo[s];
                return (
                    <Badge
                        key={s}
                        className="rounded-full bg-card dark:bg-card/60 dark:bg-white/5 text-foreground ring-1 ring-white/10 hover:bg-white/10"
                    >
                        <span className="flex items-center gap-2">
                            {logo ? (
                                <img
                                    src={logo}
                                    alt={`${s} logo`}
                                    className="h-4 w-4"
                                    loading="lazy"
                                />
                            ) : null}
                            <span>{s}</span>
                        </span>
                    </Badge>
                );
            })}
        </div>
    );
}

function ProjectCard({ project }: { project: Project }) {
    const safeDemo = project.links?.demo && project.links.demo.startsWith("http");
    const safeRepo = project.links?.repo && project.links.repo.startsWith("http");

    return (

        <Card className="h-full rounded-3xl border-0 bg-card/60 shadow-xl shadow-black/20 ring-1 ring-white/10">
            <CardHeader>
                <div className="flex items-start justify-between gap-3">
                    <div>
                        <CardTitle className="text-lg">{project.name}</CardTitle>
                        <CardDescription>{project.type}</CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                        {safeRepo && project.links?.repo ? (
                            <Button asChild size="icon" variant="ghost" className="rounded-xl border-2 border-transparent hover:border-white/10 hover:bg-white/5 hover:scale-110 transition-all duration-200" aria-label="Repo" title="Repo">
                                <a href={project.links.repo} target="_blank" rel="noreferrer">
                                    <Github className="h-4 w-4 transition-transform group-hover:scale-110" />
                                </a>
                            </Button>
                        ) : null}
                        {safeDemo && project.links?.demo ? (
                            <Button asChild size="icon" variant="ghost" className="rounded-xl border-2 border-transparent hover:border-white/10 hover:bg-white/5 hover:scale-110 transition-all duration-200" aria-label="Demo" title="Demo">
                                <a href={project.links.demo} target="_blank" rel="noreferrer">
                                    <ExternalLink className="h-4 w-4 transition-transform group-hover:scale-110" />
                                </a>
                            </Button>
                        ) : null}
                    </div>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{project.description}</p>

                {project.bullets?.length ? (
                    <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                        {project.bullets.map((b: string, i: number) => (
                            <li key={i}>{b}</li>
                        ))}
                    </ul>
                ) : null}

                <div className="flex flex-wrap gap-2">
                    {(project.tags || []).map((t: string) => (
                        <Badge key={t} className="rounded-full bg-white/10 text-foreground ring-1 ring-white/10">
                            {t}
                        </Badge>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
function BackgroundDecor() {
    return (
        <div className="pointer-events-none fixed inset-0 -z-10">

            {/* Dark base (much deeper) */}
            <div className="absolute inset-0 bg-gradient-to-br 
                from-[#0b0f1f] 
                via-[#070a14] 
                to-[#02040a]"
            />

            {/* Strong purple glow (top right) */}
            <div className="absolute -top-60 -right-60 
                h-[800px] w-[800px] 
                rounded-full 
                bg-purple-700/30 
                blur-[160px]"
            />

            {/* Strong blue glow (top left) */}
            <div className="absolute -top-60 -left-60 
                h-[800px] w-[800px] 
                rounded-full 
                bg-blue-600/25 
                blur-[160px]"
            />

            {/* Subtle bottom center glow */}
            <div className="absolute -bottom-80 left-1/2 
                h-[900px] w-[900px] 
                -translate-x-1/2 
                rounded-full 
                bg-indigo-600/20 
                blur-[200px]"
            />
        </div>
    );
}

