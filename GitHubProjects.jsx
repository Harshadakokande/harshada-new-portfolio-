
import { useEffect, useState } from "react";

const GitHubProjects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Harshadakokande/repos")
      .then(res => res.json())
      .then(data => {
        const filtered = data.filter(r => !r.fork);
        setRepos(filtered);
      });
  }, []);

  return (
    <section id="work" className="py-20 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {repos.map(repo => (
            <div key={repo.id} className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
              <h3 className="text-xl font-semibold">{repo.name}</h3>
              <p className="text-gray-600 mt-2 text-sm">
                {repo.description || "Project description not available."}
              </p>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 text-indigo-600 font-medium"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default GitHubProjects;
