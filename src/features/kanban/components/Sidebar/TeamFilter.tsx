// components/Sidebar/TeamFilter.tsx
import { Checkbox } from '@/shared/components/ui/checkbox';
import { teamSelectionList } from '../../constants/kanban';
import { cn } from '@/shared/lib/utils/cn';

interface TeamFilterProps {
  selectedTeams: string[];
  isOpen: boolean;
  onToggle: (team: string) => void;
  onAccordionToggle: () => void;
}

export function TeamFilter({
  selectedTeams,
  isOpen,
  onToggle,
  onAccordionToggle,
}: TeamFilterProps) {
  return (
    <div className="border-t border-[#dbdbdb] py-[20px]">
      <div className="flex items-center justify-between">
        <p>팀 선택</p>
        <button type="button" onClick={onAccordionToggle}>
          {isOpen ? '▼' : '▲'}
        </button>
      </div>

      <ul
        className={cn('overflow-hidden pt-[10px]', isOpen ? 'h-full' : 'h-0')}
      >
        {teamSelectionList.map((team) => (
          <li key={`${team}_team`} className="px-[8px] py-[6px]">
            <label
              className="flex cursor-pointer items-center gap-[8px]"
              onClick={(e) => {
                e.preventDefault();
                onToggle(team);
              }}
            >
              <Checkbox className="" checked={selectedTeams.includes(team)} />
              {team}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
