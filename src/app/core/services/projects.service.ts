import { Injectable, signal, computed } from "@angular/core";
import { Project, ProjectCategory } from "../models/project.interface";

@Injectable({
  providedIn: "root",
})
export class ProjectsService {
  // Signal privado writable
  private projectsSignal = signal<Project[]>([]);

  // Signal público readonly
  readonly projects = this.projectsSignal.asReadonly();

  // Computed signals para filtros comunes
  readonly featuredProjects = computed(() =>
    this.projectsSignal()
      .filter((p) => p.featured)
      .sort((a, b) => a.order - b.order),
  );

  readonly projectCount = computed(() => this.projectsSignal().length);

  readonly projectsByCategory = computed(() => {
    const projects = this.projectsSignal();
    return {
      [ProjectCategory.FULLSTACK]: projects.filter(
        (p) => p.category === ProjectCategory.FULLSTACK,
      ),
      [ProjectCategory.FRONTEND]: projects.filter(
        (p) => p.category === ProjectCategory.FRONTEND,
      ),
      [ProjectCategory.BACKEND]: projects.filter(
        (p) => p.category === ProjectCategory.BACKEND,
      ),
      [ProjectCategory.MOBILE]: projects.filter(
        (p) => p.category === ProjectCategory.MOBILE,
      ),
    };
  });

  constructor() {
    this.loadMockProjects();
  }

  /**
   * Carga proyectos mock (posteriormente reemplazar con HTTP)
   */
  private loadMockProjects(): void {
    const mockProjects: Project[] = [
      {
        id: "1",
        title: "PokéDex Competitiva",
        description: 
        'Sistema de análisis competitivo de equipos Pokémon con visualización de estadísticas combinadas, métricas comparativas y gestión de equipos de 6 integrantes.',
        longDescription:
          "Sistema completo que consume la PokeAPI para presentar información detallada de cada Pokémon. Permite crear equipos personalizados de hasta 6 Pokémon y analizar sus estadísticas de forma individual y comparativa. Incluye sistema de búsqueda avanzada, filtros por tipo, y análisis comparativo de stats con visualizaciones en gráficos de barras.",
        technologies: [
          "Angular",
          "TypeScript",
          "PostgreSQL",
          "FastAPI",
          "Python",
          "PokeAPI",
        ],
        category: ProjectCategory.FULLSTACK,
        imageUrl: "/images/projects/pokedex-analysis.jpg",
        demoUrl: "https://pokedex-project-2026.vercel.app/",
        githubUrl: "https://github.com/SebasTejeda/Pokedex",
        featured: true,
        order: 1,
        createdAt: new Date("2025-03-15"),
      },
      {
        id: "2",
        title: "Tiendita - Sistema de Gestión",
        description:
          "Sistema de control de inventario y ventas para tienda familiar, optimizando el registro de productos y seguimiento de stock en tiempo real.",
        longDescription:
          "Aplicación web desarrollada para resolver la necesidad real de control de inventario en negocio familiar. Implementa gestión de productos, registro de ventas, alertas de stock bajo y reportes de movimiento. Base de datos en tiempo real con Firebase.",
        technologies: [
          "Angular",
          "TypeScript",
          "Firebase",
          "Firestore",
          "CSS3",
        ],
        category: ProjectCategory.FULLSTACK,
        imageUrl: "/images/projects/tiendita.jpg",
        demoUrl: "https://mi-tienda-web-1f738.web.app",
        githubUrl: "https://github.com/SebasTejeda/mi-tiendita",
        featured: true,
        order: 2,
        createdAt: new Date("2025-02-20"),
      },
    ];

    this.projectsSignal.set(mockProjects);
  }

  /**
   * Obtiene un proyecto por ID
   */
  getProjectById(id: string): Project | undefined {
    return this.projectsSignal().find((p) => p.id === id);
  }

  /**
   * Filtra proyectos por categoría
   */
  filterByCategory(category: ProjectCategory): Project[] {
    return this.projectsSignal().filter((p) => p.category === category);
  }

  /**
   * Método para futuras actualizaciones desde API
   */
  setProjects(projects: Project[]): void {
    this.projectsSignal.set(projects);
  }
}
