// hooks/useFilters.ts
import { useState } from 'react';
import { projectSelectionList, teamSelectionList } from '../constants/kanban';

interface FilterState {
  selectedProjects: string[];
  selectedTeams: string[];
  selectedAssignees: string[];
}

export const useFilters = () => {
  const [filters, setFilters] = useState<FilterState>({
    selectedProjects: [],
    selectedTeams: [],
    selectedAssignees: [],
  });

  const updateProjectFilter = (projects: string[]) => {
    setFilters((prev) => ({ ...prev, selectedProjects: projects }));
  };

  const updateTeamFilter = (teams: string[]) => {
    setFilters((prev) => ({ ...prev, selectedTeams: teams }));
  };

  const updateAssigneeFilter = (assignees: string[]) => {
    setFilters((prev) => ({ ...prev, selectedAssignees: assignees }));
  };

  const handleProjectToggle = (proj: string) => {
    if (proj === 'All') {
      updateProjectFilter(['All']);
      return;
    }

    setFilters((prev) => {
      const current = prev.selectedProjects;
      const activeProjects = current.includes(proj)
        ? current.filter((p) => p !== proj)
        : [...current.filter((p) => p !== 'All'), proj];

      let selectedProjects;
      if (
        activeProjects.length === 0 ||
        activeProjects.length === projectSelectionList.length - 1
      ) {
        selectedProjects = ['All'];
      } else {
        selectedProjects = activeProjects;
      }

      return {
        ...prev,
        selectedProjects: selectedProjects,
      };
    });
  };

  const handleTeamToggle = (team: string) => {
    if (team === 'All') {
      updateTeamFilter(['All']);
      return;
    }

    setFilters((prev) => {
      const current = prev.selectedTeams;
      const activeTeams = current.includes(team)
        ? current.filter((t) => t !== team)
        : [...current.filter((t) => t !== 'All'), team];

      let selectedTeams;
      if (
        activeTeams.length === 0 ||
        activeTeams.length === teamSelectionList.length - 1
      ) {
        selectedTeams = ['All'];
      } else {
        selectedTeams = activeTeams;
      }

      return {
        ...prev,
        selectedTeams: selectedTeams,
      };
    });
  };

  const resetFilters = () => {
    setFilters({
      selectedProjects: [],
      selectedTeams: [],
      selectedAssignees: [],
    });
  };

  return {
    filters,
    updateProjectFilter: handleProjectToggle,
    updateTeamFilter: handleTeamToggle,
    updateAssigneeFilter,
    resetFilters,
  };
};
