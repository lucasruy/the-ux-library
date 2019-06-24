/* eslint-disable */

import 'isomorphic-fetch'
import { expect } from 'chai'

import GetValues from '../components/GetValues.js'
import CreateMarkup from '../components/CreateMarkup.js'
import FilterBy from '../components/FilterBy.js'
import LoadMore from '../components/LoadMore.js'
import SearchInput from '../components/SearchInput.js'

describe('App', () => {
  describe('Get Values', () => {
    context('Smoke test', () => {
      it('should be exist', () => {
        expect(GetValues).to.exist
      })
    })
  })

  describe('Create Markup', () => {
    context('Smoke test', () => {
      it('should be exist', () => {
        expect(CreateMarkup).to.exist
      })
    })
  })

  describe('Filter By', () => {
    context('Smoke test', () => {
      it('should be exist', () => {
        expect(FilterBy).to.exist
      })
    })
  })

  describe('Load More', () => {
    context('Smoke test', () => {
      it('should be exist', () => {
        expect(LoadMore).to.exist
      })
    })
  })

  describe('SearchInput', () => {
    context('Smoke test', () => {
      it('should be exist', () => {
        expect(SearchInput).to.exist
      })
    })
  })
})
