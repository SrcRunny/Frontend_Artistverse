<template>
  <div class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Lyrics Generator</h2>
      </div>
      <form @submit.prevent="generateLyrics" class="mt-8 space-y-6">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="prompt" class="sr-only">Prompt</label>
            <input id="prompt" name="prompt" type="text" required v-model="prompt" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Enter your prompt" />
          </div>
        </div>

        <div>
          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
            </span>
            Generate Lyrics
          </button>
        </div>
      </form>

      <div v-if="lyrics" class="mt-8 text-center">
        <h2 class="text-2xl font-bold">Generated Lyrics:</h2>
        <pre class="mt-4 text-gray-600 whitespace-pre-wrap">{{ lyrics }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      prompt: '',
      lyrics: ''
    }
  },
  methods: {
    async generateLyrics() {
      try {
        const response = await fetch('http://127.0.0.1:5000/generate-lyrics', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ prompt: this.prompt })
        })

        const data = await response.json()
        this.lyrics = data.lyrics
      } catch (error) {
        console.error('Error:', error)
      }
    }
  }
}
</script>