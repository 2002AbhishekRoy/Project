export interface SearchState {
  status: string
  message: string
}

export interface Source {
  title: string
  url: string
  snippet: string
}

export interface StreamingResponse {
  type: 'search_state' | 'sources' | 'answer' | 'complete'
  content: SearchState | Source[] | string
}

export class PerplexityAPI {
  private static readonly ENDPOINT = 'https://mock-askperplexity.piyushhhxyz.deno.net'

  static async* streamSearch(question: string): AsyncGenerator<StreamingResponse> {
    try {
      const response = await fetch(this.ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      })

      if (!response.body) {
        throw new Error('No response body')
      }

      const reader = response.body.getReader()
      const decoder = new TextDecoder()
      let buffer = ''

      while (true) {
        const { done, value } = await reader.read()
        
        if (done) break
        
        buffer += decoder.decode(value, { stream: true })
        
        // Split by lines and process each complete line
        const lines = buffer.split('\n')
        buffer = lines.pop() || '' // Keep the incomplete line in buffer
        
        for (const line of lines) {
          if (line.trim() === '') continue
          
          try {
            // Parse the JSON data
            const data = JSON.parse(line)
            
            if (data.type === 'search_state') {
              yield {
                type: 'search_state',
                content: {
                  status: data.status,
                  message: data.message
                }
              }
            } else if (data.type === 'sources') {
              yield {
                type: 'sources',
                content: data.sources
              }
            } else if (data.type === 'answer') {
              yield {
                type: 'answer',
                content: data.content
              }
            } else if (data.type === 'complete') {
              yield {
                type: 'complete',
                content: ''
              }
              return
            }
          } catch (parseError) {
            console.warn('Failed to parse line:', line, parseError)
          }
        }
        
        // Add a small delay to simulate real streaming
        await new Promise(resolve => setTimeout(resolve, 50))
      }
    } catch (error) {
      console.error('Stream error:', error)
      throw error
    }
  }
}