import { Checkbox } from '@/shared/components/ui/checkbox';
import { cn } from '@/shared/lib/utils/cn';
import { projectSelectionList } from '../../constants/kanban';

interface ProjectFilterProps {
  selectedProjects: string[];
  isOpen: boolean;
  onToggle: (project: string) => void;
  onAccordionToggle: () => void;
}

export function ProjectFilter({
  selectedProjects,
  isOpen,
  onToggle,
  onAccordionToggle,
}: ProjectFilterProps) {
  return (
    <div className="border-t border-[#dbdbdb] py-[20px]">
      <div className="flex items-center justify-between">
        <p>프로젝트 선택</p>
        <button type="button" onClick={onAccordionToggle}>
          {isOpen ? '▼' : '▲'}
        </button>
      </div>
      <ul
        className={cn('overflow-hidden pt-[10px]', isOpen ? 'h-full' : 'h-0')}
      >
        {projectSelectionList.map((project) => (
          <li
            key={`${project}_project`}
            className="rounded-xl px-[8px] py-[6px] hover:bg-[#ededed]"
            onClick={(e) => {
              e.preventDefault();
              onToggle(project);
            }}
          >
            <label className="flex cursor-pointer items-center gap-[8px]">
              <Checkbox checked={selectedProjects.includes(project)} />
              {project}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
