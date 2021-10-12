import Page from "../components/Page"

export default function Home() {
	return (
		<Page
			title={process.env.NEXT_PUBLIC_NAME}
			metaDescription="Test meta description"
		>
			<p>Main page content.</p>
		</Page>
	)
}
