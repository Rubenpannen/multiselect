import { createSelect, destroy } from 'unit-test-helpers'
import { nextTick } from 'composition-api'

jest.useFakeTimers()

describe('useA11y', () => {
  describe('ariaOwns', () => {
    it('should contain id when defined', () => {
      const select = createSelect({
        value: null,
        options: [1,2,3],
        id: 'id'
      })

      expect(select.vm.ariaOwns).toBe('id-multiselect-options')
    })

    it('should not contain id when not defined', () => {
      const select = createSelect({
        value: null,
        options: [1,2,3],
      })

      expect(select.vm.ariaOwns).toBe('multiselect-options')
    })
  })

  describe('ariaActiveDescendant', () => {
    it('should contain pointed', () => {
      const select = createSelect({
        value: null,
        options: [1,2,3],
      })

      select.vm.setPointer({ value: 1, label: 1 })

      expect(select.vm.ariaActiveDescendant).toBe('multiselect-option-1')
    })
    
    it('should contain pointed with id', () => {
      const select = createSelect({
        value: null,
        options: [1,2,3],
        id: 'id'
      })

      select.vm.setPointer({ value: 1, label: 1 })

      expect(select.vm.ariaActiveDescendant).toBe('id-multiselect-option-1')
    })
    
    it('should be undefined if not pointed', () => {
      const select = createSelect({
        value: null,
        options: [1,2,3],
        id: 'id'
      })

      expect(select.vm.ariaActiveDescendant).toBe(undefined)
    })
  })

  describe('ariaLabel', () => {
    it('should contain placeholder if has no selected', () => {
      const select = createSelect({
        value: null,
        options: [1,2,3],
        placeholder: 'Placeholder'
      })

      expect(select.vm.ariaLabel).toBe('Placeholder')
    })

    it('should contain option label if has selected, mode=single', () => {
      const select = createSelect({
        value: 1,
        options: [1,2,3],
        placeholder: 'Placeholder'
      })

      expect(select.vm.ariaLabel).toBe('1')
    })

    it('should contain multipleLabelText if has selected, mode=multiple', () => {
      const select = createSelect({
        mode: 'multiple',
        value: [1,2,3],
        options: [1,2,3],
        placeholder: 'Placeholder'
      })

      expect(select.vm.ariaLabel).toBe(select.vm.multipleLabelText)
    })

    it('should contain option labels if has selected, mode=tags', () => {
      const select = createSelect({
        mode: 'tags',
        value: [1,2,3],
        options: [1,2,3],
        placeholder: 'Placeholder'
      })

      expect(select.vm.ariaLabel).toBe('1, 2, 3')
    })
  })

  describe('ariaPlaceholder', () => {
    it('should equal to ariaLabel', () => {
      const select = createSelect({
        value: null,
        options: [1,2,3],
        placeholder: 'Placeholder'
      })

      expect(select.vm.ariaPlaceholder).toBe('Placeholder')
    })
  })

  describe('ariaOptionId', () => {
    it('should return value', () => {
      const select = createSelect({
        value: [1],
        options: [1,2,3],
      })

      expect(select.vm.ariaOptionId({
        value: 1, label: 1
      })).toBe('multiselect-option-1')
    })
    
    it('should return value with id', () => {
      const select = createSelect({
        value: [1],
        options: [1,2,3],
        id: 'id'
      })

      expect(select.vm.ariaOptionId({
        value: 1, label: 1
      })).toBe('id-multiselect-option-1')
    })
  })

  describe('ariaOptionLabel', () => {
    it('should return option label', () => {
      const select = createSelect({
        value: null,
        options: [1,2,3],
      })

      expect(select.vm.ariaOptionLabel({
        value: 1, label: 1
      })).toBe('1')
    })
    
    it('should return option label with tick if selected', () => {
      const select = createSelect({
        value: 1,
        options: [1,2,3],
      })

      expect(select.vm.ariaOptionLabel({
        value: 1, label: 1
      })).toBe('✓ 1')
    })
  })

  describe('ariaGroupLabel', () => {
    it('should return group label', () => {
      const select = createSelect({
        value: null,
        groups: true,
        options: [
          {
            label: 'a',
            options: [1,2,3]
          },
          {
            label: 'b',
            options: [4,5,6]
          },
        ],
      })

      expect(select.vm.ariaGroupLabel({
        label: 'a',
        options: [1,2,3]
      })).toBe('a')
    })
  })
})