export default function getListStudentIds(lists) {
  if (Array.isArray(lists)) {
    return lists.map((list) => list.id);
  }
  return [];
}
