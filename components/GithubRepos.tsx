import { githubUsername } from '@/data/portfolio';
import GithubReposGrid, { type GithubRepo } from './GithubReposGrid';
import SectionHeading from './SectionHeading';

interface GithubApiRepo extends GithubRepo {
  fork: boolean;
  archived: boolean;
}

async function getRepos(): Promise<GithubRepo[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=12`,
      {
        headers: { Accept: 'application/vnd.github+json' },
        next: { revalidate: 3600 },
      },
    );

    if (!response.ok) return [];

    const repos = (await response.json()) as GithubApiRepo[];

    return repos
      .filter((repo) => !repo.fork && !repo.archived && repo.name !== 'portifolio_thiago')
      .slice(0, 6)
      .map(({ id, name, description, language, html_url, stargazers_count }) => ({
        id,
        name,
        description,
        language,
        html_url,
        stargazers_count,
      }));
  } catch {
    return [];
  }
}

export default async function GithubRepos() {
  const repos = await getRepos();

  return (
    <section id="github" className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
      <SectionHeading
        eyebrow="GitHub"
        title="Repositórios públicos atualizados recentemente"
        subtitle="Uma seleção automática dos projetos públicos mais recentes, com atualização em cache para manter a página rápida e estável."
      />

      {repos.length > 0 ? (
        <GithubReposGrid repos={repos} />
      ) : (
        <div className="rounded-3xl border border-white/[0.07] bg-base-800/60 p-8 text-center text-sm text-ice-400">
          Não foi possível carregar os repositórios neste momento.{' '}
          <a
            href={`https://github.com/${githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-ice-200 underline underline-offset-4"
          >
            Acesse o perfil diretamente no GitHub
          </a>
          .
        </div>
      )}
    </section>
  );
}
