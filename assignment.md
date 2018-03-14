# Debitoor test
Create a tab based app using React Native + redux. 

## Requirements
Use Github Rest API (https://developer.github.com/v3/)
First tab
-  On main screen of app show a list of top repositories (name, number of stars) sorted by number of stars. 
- When pressing on repository item show additional repository information. (eg. with list of the last 10 pull requests with author, title, number and status.)
-  On the detail page it should be possible to save repo as favourite, saving it to the redux state.

- *Optional*: On top of page should be search input with possibility to search by repo name (sort by stars).
Second tab
- Show a list of your saved favourite repos.
- When tapping an item on the list show the repository details and refresh them from GitHub api. (Extra points for adding a refresh feature to the page.)
- Make it possible to unfavourite repository.


### General 
- [ x ] Setup redux
- [ x ] Setup tabs
- [ ] Setup stack navigator (for DetailsScreen)
 
### Home screen
- [ x ] Fetch repos
- [ x ] Display repos
- [ x ] onPress navigate to DetailsScreen

### Details screen
- [ x ] Set favorites
- [ x ] Show PR's

### Favorites
- [ x ] Show my favorites
- [] Unfavorite repo
