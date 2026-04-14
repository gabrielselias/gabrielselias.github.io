import Image from "next/image";
import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";
import { personal } from "@/data/personal";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function HomePage() {
  return (
    <PageWrapper locale="pt" currentPath="/">
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-8">
          <div className="shrink-0">
            <Image
              src={`${basePath}${personal.photo}`}
              alt={personal.name}
              width={140}
              height={140}
              className="rounded-full object-cover w-28 h-28 sm:w-36 sm:h-36 border-2 border-stone-200 dark:border-stone-700"
              priority
            />
          </div>
          <div className="space-y-3">
            <h1 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-stone-900 dark:text-stone-100">
              {personal.name}
            </h1>
            <p className="text-lg text-stone-500 dark:text-stone-400">
              {personal.tagline.pt}
            </p>
          </div>
        </div>

        <p className="prose-body text-base leading-relaxed max-w-2xl">
          {personal.bio.pt}
        </p>

        <nav className="flex flex-wrap gap-x-4 gap-y-2 pt-2" aria-label="Quick links">
          <Link href="/sobre" className="text-sm text-[var(--accent)] hover:underline underline-offset-4">
            Sobre &rarr;
          </Link>
          <Link href="/pesquisa" className="text-sm text-[var(--accent)] hover:underline underline-offset-4">
            Pesquisa &rarr;
          </Link>
          <Link href="/textos" className="text-sm text-[var(--accent)] hover:underline underline-offset-4">
            Textos &rarr;
          </Link>
          <Link href="/ensino" className="text-sm text-[var(--accent)] hover:underline underline-offset-4">
            Ensino &rarr;
          </Link>
          <Link href="/contato" className="text-sm text-[var(--accent)] hover:underline underline-offset-4">
            Contato &rarr;
          </Link>
        </nav>
      </div>
    </PageWrapper>
  );
}
