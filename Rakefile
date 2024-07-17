require "json"
require "yaml"
require "open-uri"
require "nokogiri"
require "dotenv/tasks"

desc 'Get latest EA video from YouTube'
task :geteavideo => :dotenv do
	ea_feed = 'https://www.youtube.com/feeds/videos.xml?channel_id=UCSL7BIdwgBEZ09BpD9xPPYQ'
	feed = Nokogiri::XML(URI.open(ea_feed))
	feed.remove_namespaces!

	video = feed.xpath('//entry').first

	ea_data = {
		'title': video.xpath('title').text,
		'link': video.xpath('link').attr('href').to_s,
		'thumbnail': video.xpath('group/thumbnail').attr('url').to_s
	}

	File.open('./_data/youtube.json', 'w') { |file| file.write(JSON.generate(ea_data)) }

	puts 'Done'

end

desc 'Get all agency rankings from Partnership for Public Service'
task :getrankings => :dotenv do
	files = [
	  "https://ourpublicservice.io/api/bptw-rankings-overall/year/2023/size/large/type/overall/parent/null/limit/9999",
	  "https://ourpublicservice.io/api/bptw-rankings-overall/year/2023/size/mid/type/overall/parent/null/limit/9999",
	  "https://ourpublicservice.io/api/bptw-rankings-overall/year/2023/size/small/type/overall/parent/null/limit/9999"
	]

	agency_rows = []

	files.each { |file|
		result = JSON.parse(
			URI.open(file,
				"Authorization" => ENV['OPS_TOKEN']
			).read
		)

		result['data'].each { |row|
			agency_rows.push({
				'name': row['agency'],
				'value': row['data']
			})
		}
	}

	agency_rows.sort! { |a,b| b[:value] <=> a[:value] }

	agencies = {}

	agency_rows.each_with_index { |row, i|
		agencies[row[:name]] = {
			'value': row[:value],
			'rank': i + 1
		}
	}

	filename = './_data/agency_rank.json'
	File.open(filename, 'w') { |file| file.write(JSON.generate(agencies)) }

	puts 'Done'

end
