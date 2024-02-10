type GithubRepo = {
    id: number
    name: string
    url: string
    languages_url: string
    description: string | null
    tags?: Array<string>
    default_branch: string
    created_at: string
}