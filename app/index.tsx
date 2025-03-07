import { TTask, useTasksContext } from "@/provider/taskProvider";
import { router } from "expo-router";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

export default function Index() {

  const {
    taskList,
  } = useTasksContext();

  const openTask = (id: string) => {
    router.navigate(`/task/${id}`);
  };

  const renderItem = ({ item }: { item: TTask }) => (
    <TouchableOpacity onPress={() => openTask(item.id)}>
      <Text style={item?.is_toggle && { textDecorationLine: 'line-through' }}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Task List</Text>
      <FlatList
        data={taskList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
