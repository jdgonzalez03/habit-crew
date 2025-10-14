import { ref, computed } from 'vue';

const auth = ref(false)

export default function useAuth () {
  return {
    authIsLogin: computed(() => auth.value)
  }
}
