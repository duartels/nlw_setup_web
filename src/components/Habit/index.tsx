type HabitProps = {
  completed: number;
}

export const Habit = ({ completed }: HabitProps) => {
  return(
    <div className="bg-zinc-900 w-10 h-10 text-white m-2">
      {completed}
    </div>
  )
}