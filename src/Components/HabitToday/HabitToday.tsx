type HabitTodayProps = {
  name: string
}

export default function HabitToday({name}:HabitTodayProps) {
  return <p>{name}</p>
}